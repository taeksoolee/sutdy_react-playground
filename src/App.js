import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import atoms from './store/atoms';
import selectors from './store/selectors';
import Hooks from './components/Hooks';

const defaultList = [{name: 'lee'}];

function App() {
  const [list, setList] = useState(defaultList);
  const [item, setItem] = useRecoilState(atoms.itemAtom);
  const itemName = useRecoilValue(selectors.itemNameSelector);

  useEffect(() => {
    if(item) {
      setList(list => list.concat(item));
      setItem(null);
    }
  }, [item]);

  useEffect(() => {
    console.log(itemName);
  }, [itemName]);

  return (
    <div>
      <Hooks />
      <hr />
      <h1>Test</h1>
      <TodoList list={list} />
      <AddTodo />
      <hr />
      <div>{itemName}</div>
    </div>
  );
}

export default App;
