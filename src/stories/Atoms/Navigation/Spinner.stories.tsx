import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Spinner } from '../../../components/Atoms/Navigation/Spinner';

export default {
  title: 'Atoms/Navigation/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    speedMultiplier: { control: 'number' },
  },
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />;

export const SpinnerDefault = Template.bind({});
SpinnerDefault.args = {
  color: '#36d7b7',
  size: 'md',
  speedMultiplier: 1,
};
