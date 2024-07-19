import React from 'react';
import { MdAdd } from 'react-icons/md';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from '../../../components/Atoms/Inputs/Button';

export default {
  title: 'Atoms/Inputs/Button',
  component: Button,
  argTypes: {
    icon: { table: { disable: true } },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  bgColor: 'bg-yellow-500',
  bgHover: 'bg-yellow-600',
  textColor: 'text-yellow-50',
  textHover: 'text-yellow-200',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: false,
  size: 'sm',
  weight: 'font-semibold',
  label: 'NORMAL',
};

export const NormalOutlined = Template.bind({});
NormalOutlined.args = {
  bgColor: 'bg-yellow-500',
  bgHover: 'bg-yellow-600',
  textColor: 'text-yellow-50',
  textHover: 'text-yellow-200',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: true,
  size: 'sm',
  weight: 'font-semibold',
  label: 'OUTLINED',
};

export const NormalIcon = Template.bind({});
NormalIcon.args = {
  bgColor: 'bg-yellow-500',
  bgHover: 'bg-yellow-600',
  textColor: 'text-yellow-50',
  textHover: 'text-yellow-200',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: false,
  size: 'sm',
  weight: 'font-semibold',
  label: 'ICON',
  icon: <MdAdd className='-ml-3 text-xl self-center' />,
};

export const NormalOutlinedIcon = Template.bind({});
NormalOutlinedIcon.args = {
  bgColor: 'bg-yellow-500',
  bgHover: 'bg-yellow-600',
  textColor: 'text-gray-700',
  textHover: 'text-gray-900',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: true,
  size: 'sm',
  weight: 'font-semibold',
  label: 'OUTLINED ICON',
  icon: <MdAdd className='-ml-3 text-xl self-center' />,
};
