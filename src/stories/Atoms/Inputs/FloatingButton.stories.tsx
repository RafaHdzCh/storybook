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
  bgColor: 'bg-yellow-500',
  bgHover: 'hover:bg-yellow-600',
  textColor: 'text-gray-950',
  textHover: 'hover:text-gray-950',
  disabled: false,
  shadow: true,
  outlined: false,
  size: 'md',
  children: <MdAdd />,
};

export const Outlined = Template.bind({});
Outlined.args = {
  bgColor: 'bg-white', // Fondo blanco para el outline
  bgHover: 'hover:bg-yellow-100', // Hover cambia a un amarillo muy claro
  textColor: 'text-yellow-500', // Texto amarillo 500
  textHover: 'hover:text-yellow-600', // Hover del texto amarillo 600
  disabled: false,
  shadow: true,
  outlined: true,
  size: 'md',
  children: <MdAdd />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  bgColor: 'bg-yellow-500',
  bgHover: 'hover:bg-yellow-600',
  disabled: true,
  shadow: true,
  outlined: false,
  size: 'md',
  children: <MdAdd />,
};
