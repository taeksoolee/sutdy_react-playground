import React from "react";

import ToggleBtn from "./ToggleBtn";

export default {
  component: ToggleBtn, // 해당 컴포넌트
  title: "ToggleBtn" // 스토리보드에서 참조 제목
};

const Template = (args) => <ToggleBtn {...args} />;

export const On = Template.bind({});
On.args = {
  isOn: true,
  onToggle: () => {}
};


export const Off = Template.bind({});
Off.args = {
  isOn: false,
  onToggle: () => {}
};