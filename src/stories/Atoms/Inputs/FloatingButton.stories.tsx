import React from 'react';
import { MdAdd } from "react-icons/md";
import { StoryFn, Meta } from '@storybook/react';
import { FloatingButton } from '../../../components/Atoms/Inputs/FloatingButton';

export default {
  title: 'Atoms/Inputs/Floating Button',
  component: FloatingButton,
  argTypes: {
    bgColor: { control: 'color' },
    bgHover: { control: 'color' },
    textColor: { control: 'color' },
    textHover: { control: 'color' },
    borderColor: { control: 'color' },
    borderHover: { control: 'color' },
    children: { table: { disable: true } },
    shadow: { control: 'boolean' },
    outlined: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} as Meta<typeof FloatingButton>;

const Template: StoryFn<typeof FloatingButton> = (args) => <FloatingButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  bgColor: '#eab308',
  bgHover: '#d97706',
  textColor: '#fefce8',
  textHover: '#fef08a',
  disabled: false,
  shadow: true,
  outlined: false,
  size: 'md',
  children: <MdAdd />,
};

export const Outlined = Template.bind({});
Outlined.args = {
  bgColor: '#eab308',
  bgHover: '#d97706',
  textColor: '#fefce8',
  textHover: '#fef08a',
  borderColor: '#eab308',
  borderHover: '#d97706',
  disabled: false,
  shadow: true,
  outlined: true,
  size: 'md',
  children: <MdAdd />,
};
