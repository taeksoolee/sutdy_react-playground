import React from 'react';

import TodoItem from './TodoItem';

export default {
  component: TodoItem, // 해당 컴포넌트
  title: 'TodoItem', // 스토리보드에서 참조 제목
};


const Template = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    name: 'hello world',
  }
}
