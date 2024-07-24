import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ProgressBar } from '../../../components/Atoms/Navigation/ProgressBar';

export default {
  title: 'Atoms/Navigation/ProgressBar',
  component: ProgressBar,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
    progress: { 
      control: { type: 'range', min: 0, max: 100 }, 
      description: 'Progress percentage from 0 to 100'
    },
  },
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Bar = Template.bind({});
Bar.args = {
  color: '#075985',
  width: 200,
  height: 8,
  rounded: true,
  progress: 50,
};
