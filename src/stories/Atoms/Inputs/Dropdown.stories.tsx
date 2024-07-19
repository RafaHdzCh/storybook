import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Dropdown } from '../../../components/Atoms/Inputs/Dropdown';

export default {
  title: 'Atoms/Inputs/Dropdown',
  component: Dropdown,
  decorators: [
    (story) => <div style={{ maxWidth: '140px' }}>{story()}</div>
  ]
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'Dropdown',
  options: [
    {
      value: 'link1',
      label: 'Link 1'
    },
    {
      value: 'link2',
      label: 'Link 2'
    },
    {
      value: 'link3',
      label: 'Link 3'
    }
  ],
  deployOnHover: true
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Dropdown',
  options: [
    {
      value: 'link1',
      label: 'Link 1'
    },
    {
      value: 'link2',
      label: 'Link 2'
    },
    {
      value: 'link3',
      label: 'Link 3'
    }
  ],
  deployOnHover: true,
  outlined: true
};
