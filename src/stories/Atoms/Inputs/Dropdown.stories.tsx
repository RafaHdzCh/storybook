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
  outlined: false,
  deployOnHover: true,
  bgColor: "#ecfccb",
  textColor: "#4d7c0f",
  hoverBgColor: "#d9f99d",
  hoverTextColor: "#365314",
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
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Dropdown',
  deployOnHover: true,
  outlined: true,
  bgColor: "#cffafe",
  textColor: "#0369a1",
  hoverBgColor: "#bae6fd",
  hoverTextColor: "#075985",
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
  
};
