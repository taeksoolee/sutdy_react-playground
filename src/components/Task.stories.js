// src/components/Task.stories.js

import React from 'react';

import Task from './Task';

export default {
  component: Task, // 해당 컴포넌트
  title: 'Task', // 스토리보드에서 참조 제목
};


const Template = (args) => <Task {...args} />;

/*
  - Template.bind({})는 함수의 복사본을 만드는 표준 JavaScript의 한 기법으로 
    각각의 스토리가 고유한 속성(properties)을 갖지만 동시에 동일한 구현을 사용하도록 할 수있다.
  - export하는 것은 차후 스토리에서 이를 재사용 할 수 있도록 한다.
*/

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};