import React from 'react';
import { MdAdd } from 'react-icons/md';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from '../../../components/Atoms/Inputs/Button';

export default {
  title: 'Atoms/Inputs/Button',
  component: Button,
  argTypes: {
    icon: { table: { disable: true } },
    bgColor: { control: 'color' },
    bgHover: { control: 'color' },
    textColor: { control: 'color' },
    textHover: { control: 'color' },
    outlineColor: { control: 'color' },
    outlineHover: { control: 'color' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'NORMAL',
  bgColor: '#eab308',
  bgHover: '#d97706',
  textColor: '#fefce8',
  textHover: '#fef08a',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: false,
  size: 'sm',
  weight: 'font-semibold',
};

export const NormalOutlined = Template.bind({});
NormalOutlined.args = {
  label: 'OUTLINED',
  bgColor: '#fefce8',
  bgHover: '#eab308',
  textColor: '#eab308',
  textHover: '#d97706',
  outlineColor: '#eab308',
  outlineHover: '#d97706',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: true,
  size: 'sm',
  weight: 'font-semibold',
};

export const NormalIcon = Template.bind({});
NormalIcon.args = {
  label: 'ICON',
  bgColor: '#eab308',
  bgHover: '#d97706',
  textColor: '#fefce8',
  textHover: '#fef08a',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: false,
  size: 'sm',
  weight: 'font-semibold',
  icon: <MdAdd className='-ml-3 text-xl self-center' />,
};

export const NormalOutlinedIcon = Template.bind({});
NormalOutlinedIcon.args = {
  label: 'OUTLINED ICON',
  bgColor: '#fefce8',
  bgHover: '#eab308',
  textColor: '#eab308',
  textHover: '#d97706',
  outlineColor: '#eab308',
  outlineHover: '#d97706',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: true,
  size: 'sm',
  weight: 'font-semibold',
  icon: <MdAdd className='-ml-3 text-xl self-center' />,
};
