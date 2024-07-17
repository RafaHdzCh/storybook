import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProgressBar } from "../../../components/Atoms/General/ProgressBar";

export default {
  title: 'Atoms/General/ProgressBar',
  component: ProgressBar,
} as Meta;

type ProgressBarProps = {
  shape: 'rounded' | 'square';
  thickness: 'small' | 'large';
  value: number;
};

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const RoundedProgressBar = Template.bind({});
RoundedProgressBar.args = {
  shape: 'rounded',
  thickness: 'large',
  value: 50, // Valor inicial del slider
};
