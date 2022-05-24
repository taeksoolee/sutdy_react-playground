import axios from 'axios';
import { debounce, throttle } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// 직접 구현할 수 있는 3가지 방법
// 1. Scroll Event - 최적화가 어려움. 너무 빈번하게 호출되므로 throttle 필요
// 2. IntersectionObserver - 보편적 방법 
//    - list 요소 아래에 빈 div를 생성해서 ref를 설정하고 교차시점에 다음 리스트 호출하는 방법으로 구현
//    - 브라우저 호환성을 위해 polyfill이 필요
// 3. useRef

// useFetch
const useFetch = (query) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const sendQuery = useCallback(async () => {
    if(!loading && hasMore) {
      try {
        setLoading(true);
        setError(false);

        const {page, keyword} = query;
  
        const res = await axios.get(`http://localhost:4000/movies?page=${page || 1}&keyword=${keyword || ''}`);

        if(res.data?.length === 0) {
          setHasMore(false);
        }
        
        if(page === 1) {
          setList(res?.data || []);
        } else {
          setList((prev) => [...prev, ...res?.data]);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }
  }, [query]);

  const refresh = useCallback(() => {
    setHasMore(true);
  }, []);

  useEffect(() => {
    sendQuery(query);
  }, [sendQuery]);

  return {loading, error, list, refresh};
}

export default function InfinityScroll() {
  const [query, setQuery] = useState({
    keyword: '',
    page: 0,
  });

  const {loading, error, list, refresh } = useFetch(query);
  const loader = useRef(null)

  const handleChange = useCallback(() => {
    (debounce((e) => {
      refresh();
      setQuery({
        keyword: e.target.value,
        page: 1
      });
    }, 300))();
  }, []);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    target.isIntersecting && setQuery((q) => ({keyword: q.keyword, page: q.page + 1}));
  }, []);

  useEffect(() => {
    const obeserver = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0, // threshold: 1.0 은 대상 요소가 root 에 지정된 요소 내에서 100% 보여질 때 콜백이 호출될 것을 의미한다.
    });

    loader.current && obeserver.observe(loader.current);
  }, [handleObserver]);
  

  return (
    <div>
      <h1>InfinityScroll</h1>
      <input onChange={handleChange}/>
      {list.map((v, i) => (
        <div style={{height: '600px'}} key={i}>{v.name}</div>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>error...</p>}
      <div ref={loader} />
    </div>
  );
}