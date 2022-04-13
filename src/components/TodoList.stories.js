import React from 'react';

import TodoList from './TodoList';

export default {
  component: TodoList, // 해당 컴포넌트
  title: 'TodoList', // 스토리보드에서 참조 제목
};


const Template = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      name: 'hello world',
    },
    {
      name: 'hello two',
    },
    {
      name: 'what?!',
    }
  ]
}
