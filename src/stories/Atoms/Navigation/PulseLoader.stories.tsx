import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PulseLoader } from '../../../components/Atoms/Navigation/PulseLoader';

export default {
  title: 'Atoms/Navigation/PulseLoader',
  component: PulseLoader,
  argTypes: {
    color: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    speedMultiplier: { control: 'number' },
  },
} as Meta<typeof PulseLoader>;

const Template: StoryFn<typeof PulseLoader> = (args) => <PulseLoader {...args} />;

export const SpinnerDefault = Template.bind({});
SpinnerDefault.args = {
  color: '#36d7b7',
  size: 'md',
  speedMultiplier: 1,
};
