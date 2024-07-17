import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Switch } from '../../../components/Atoms/Inputs/Switch';

export default {
  title: 'Atoms/Inputs/Switch',
  component: Switch,
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  options: [
    { label: 'Si', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Tal vez', value: 'maybe' },
  ],
  selectedValue: 'no',
  disabled: false,
};