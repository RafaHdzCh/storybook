import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { LoadingBar } from '../../../components/Atoms/Navigation/LoadingBar';

export default {
  title: 'Atoms/Navigation/LoadingBar',
  component: LoadingBar,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
} as Meta<typeof LoadingBar>;

const Template: StoryFn<typeof LoadingBar> = (args) => <LoadingBar {...args} />;

export const Bar = Template.bind({});
Bar.args = {
  color: '#075985',
  width: 200,
  height: 8,
};