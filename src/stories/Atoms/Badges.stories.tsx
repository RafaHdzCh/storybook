import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badges, BadgesProps } from '../../components/Atoms/Badges';

export default {
  title: 'Atoms/Badges',
  component: Badges,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'fail'],
      },
    },
    label: { control: 'text' },
  },
} as Meta<typeof Badges>;

const Template: StoryFn<BadgesProps> = (args) => <Badges {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  label: 'Success',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  label: 'Info',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  label: 'Warning',
};

export const Fail = Template.bind({});
Fail.args = {
  type: 'fail',
  label: 'Fail',
};
