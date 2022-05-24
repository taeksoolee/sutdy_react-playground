// src/components/Task.stories.js

import React from 'react';
import InfinityScroll from './InfinityScroll';

export default {
  component: InfinityScroll,
  title: 'InfinityScroll',
};

const Template = (args) => <InfinityScroll {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};