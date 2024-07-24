import React from 'react';
import { MdAdd } from 'react-icons/md';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from '../../../components/Atoms/Inputs/Button';

export default {
  title: 'Atoms/Inputs/Button',
  component: Button,
  argTypes: {
    children: { table: { disable: true } },
    icon: { table: { disable: true } },
    bgColor: { control: 'color' },
    bgHover: { control: 'color' },
    textColor: { control: 'color' },
    textHover: { control: 'color' },
    borderColor: { control: 'color' },
    borderHover: { control: 'color' },
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

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'OUTLINED',
  bgColor: '#fefce8',
  bgHover: '#eab308',
  textColor: '#eab308',
  textHover: '#d97706',
  borderColor: '#eab308',
  borderHover: '#d97706',
  shadow: true,
  disabled: false,
  loading: false,
  outlined: true,
  size: 'sm',
  weight: 'font-semibold',
};

export const Icon = Template.bind({});
Icon.args = {
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

export const Floating = Template.bind({});
Floating.args = {
  children: <MdAdd />,
  bgColor: '#eab308',
  bgHover: '#d97706',
  textColor: '#fefce8',
  textHover: '#fef08a',
  shadow: true,
  outlined: false,
  size: 'floating',
};

export const FloatingOutlined = Template.bind({});
FloatingOutlined.args = {
  children: <MdAdd />,
  bgColor: '#fefce8',
  bgHover: '#eab308',
  textColor: '#eab308',
  textHover: '#d97706',
  borderColor: '#eab308',
  borderHover: '#d97706',
  shadow: true,
  outlined: true,
  size: 'floating',
};

export const ButtonVariants = 
{
  success: 
  {
    bgColor: '#10b981',
    bgHover: '#059669',
    textColor: '#ffffff',
    textHover: '#d1fae5',
    borderColor: '#10b981',
    borderHover: '#059669',
  },
  warning: 
  {
    bgColor: '#f59e0b',
    bgHover: '#d97706',
    textColor: '#ffffff',
    textHover: '#fef3c7',
    borderColor: '#f59e0b',
    borderHover: '#d97706',
  },
  danger: 
  {
    bgColor: '#ef4444',
    bgHover: '#dc2626',
    textColor: '#ffffff',
    textHover: '#fee2e2',
    borderColor: '#ef4444',
    borderHover: '#dc2626',
  },
  secondary: 
  {
    bgColor: '#e5e7eb',
    bgHover: '#d1d5db',
    textColor: '#000000',
    textHover: '#374151',
    borderColor: '#e5e7eb',
    borderHover: '#d1d5db',
  },
  info: 
  {
    bgColor: "#e3f2fd",        
    bgHover: "#bbdefb",        
    textColor: "#0d47a1",      
    textHover: "#0d47a1",     
    borderColor: "#bbdefb",    
    borderHover: "#90caf9"     
  }
};