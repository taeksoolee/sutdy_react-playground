const db = {
  movies: [
    {name: '해리포터'},
    {name: '트랜스포머'},
    {name: '범죄도시'},
    {name: '범죄도시2'},
    {name: '쥬라기공원1'},
    {name: '쥬라기공원2'},
    {name: '쥬라기공원3'},
    {name: '쥬라기공원4'},
    {name: '쥬라기공원5'},
    {name: '쥬라기월드1'},
    {name: '쥬라기월드2'},
    {name: '쥬라기월드3'},
    {name: '헐크'},
    {name: '아이언맨1'},
    {name: '아이언맨2'},
    {name: '아이언맨3'},
    {name: '토르'},
    {name: '캡틴아메리카'},
    {name: '다크나이트'},
    {name: '너의 이름은'},
  ]
}

const http = require('http');
const express = require('express');

const app = express();

app.use(require('cors')());

app.get('/movies', (req, res) => {
  const displayCount = 5;
  const {page, keyword} = req.query;

  const startNum = (page-1) * displayCount;

  const fined = db.movies
                    .filter((movie) => movie.name.includes(keyword))
                    .slice(startNum, startNum + displayCount)

  res.json(fined);
})

http.createServer(app).listen(4000, () => {
  console.log('run server! port is 4000');
});