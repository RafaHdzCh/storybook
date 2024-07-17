import { Meta, StoryFn } from '@storybook/react';
import { ProgressBar } from '@fluentui/react-components';
import React from 'react';

export default {
  title: 'Atoms/General/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: StoryFn<{ shape: 'rounded' | 'square'; thickness: 'large'; value: number }> = (args) => (
  <div className="m-4">
    <ProgressBar {...args} className="rounded-full bg-blue-500 h-4" />
  </div>
);

export const RoundedProgressBar = Template.bind({});
RoundedProgressBar.args = {
  shape: 'rounded',
  thickness: 'large',
  value: 0.5,
};

export const SquareProgressBar = Template.bind({});
SquareProgressBar.args = {
  shape: 'square',
  thickness: 'large',
  value: 0.5,
};
