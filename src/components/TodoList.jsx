import React from 'react';
import logHOC from '../utility/logHOC';

import TodoItem from "./TodoItem";

function TodoList({list}) {
  return (
    <>
    {list.map((item, i) => (
      <TodoItem key={i} item={item}/>
    ))}
    </>
  );
}


export default logHOC(TodoList);