// src/components/Task.stories.js
// NOTE: 리코일 스테이트 사용 불가
import React from 'react';
import AddTodo from './AddTodo';

import Task from './AddTodo';

export default {
  component: AddTodo, // 해당 컴포넌트
  title: 'AddTodo', // 스토리보드에서 참조 제목
};

const template = (args) => <AddTodo {...args} />

export const Default = template.bind({});
Default.args = {
  
};
