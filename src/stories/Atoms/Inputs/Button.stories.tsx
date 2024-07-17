import React from 'react'
import { MdAdd } from "react-icons/md";
import { StoryFn, Meta } from '@storybook/react'
import { Button } from '../../../components/Atoms/Inputs/Button'

export default {
  title: 'Atoms/Inputs/Button',
  component: Button,
  argTypes: {
    bgHover: { control: 'color' },
    textColor: { control: 'color' },
    textHover: { control: 'color' },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const NormalWithIcon = Template.bind({})
NormalWithIcon.args = {
  bgColor: 'rgb(245, 158, 11)',
  bgHover: 'rgb(217, 119, 6)',
  textColor: 'white',
  textHover: 'white',
  children: 'BUTTON',
  disabled: false,
  loading: false,
  size: 'sm',
  weight: 500,
  icon: <MdAdd className='-ml-3 text-xl self-center' />
}

export const Normal = Template.bind({})
Normal.args = {
  bgColor: 'rgb(245, 158, 11)',
  bgHover: 'rgb(217, 119, 6)',
  textColor: 'white',
  textHover: 'white',
  disabled: false,
  loading: false,
  size: 'sm',
  weight: 500,
  children: 'BUTTON'
} 

export const Outlined = Template.bind({})
Outlined.args = {
  bgColor: 'rgb(245, 158, 11)',
  bgHover: 'rgb(217, 119, 6)',
  textColor: 'rgb(245, 158, 11)',
  textHover: 'rgb(217, 119, 6)',
  disabled: false,
  loading: false,
  outlined: true,
  size: 'sm',
  children: 'BUTTON',
  weight: 500,
  icon: <MdAdd className='-ml-3 text-xl self-center' />
} 

export const OutlinedWithIcon = Template.bind({})
OutlinedWithIcon.args = {
  bgColor: 'rgb(245, 158, 11)',
  bgHover: 'rgb(217, 119, 6)',
  textColor: 'rgb(245, 158, 11)',
  textHover: 'rgb(217, 119, 6)',
  disabled: false,
  loading: false,
  outlined: true,
  size: 'sm',
  weight: 500,
  children: 'BUTTON'
} 

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'BUTTON',
  weight: 500,
  disabled: true
}

export const Loading = Template.bind({})
Loading.args = {
  children: 'BUTTON',
  weight: 500,
  loading: true,
}

export const OutlinedDisabled = Template.bind({})
OutlinedDisabled.args = {
  disabled: true,
  weight: 500,
  loading: false,
  outlined: true,
  size: 'sm',
  children: 'BUTTON',
  icon: <MdAdd className='-ml-3 text-xl self-center' />
}

export const OutlinedLoading = Template.bind({})
OutlinedLoading.args = {
  disabled: false,
  weight: 500,
  loading: true,
  outlined: true,
  size: 'sm',
  children: 'BUTTON',
  icon: <MdAdd className='-ml-3 text-xl self-center' />
} 
