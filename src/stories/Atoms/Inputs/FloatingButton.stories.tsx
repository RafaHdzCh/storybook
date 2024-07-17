import React from 'react'
import { MdAdd } from "react-icons/md";
import { StoryFn, Meta } from '@storybook/react'
import { FloatingButton } from '../../../components/Atoms/Inputs/FloatingButton'

export default {
  title: 'Atoms/Inputs/Floating Button',
  component: FloatingButton,
  argTypes: {
    bgHover: { control: 'color' },
    textColor: { control: 'color' },
    textHover: { control: 'color' },
  },
} as Meta<typeof FloatingButton>

const Template: StoryFn<typeof FloatingButton> = (args) => <FloatingButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  bgColor: 'rgb(245, 158, 11)',
  bgHover: 'rgb(217, 119, 6)',
  textColor: 'white',
  textHover: 'white',
  disabled: false,
  size: 'md',
  children: <MdAdd />
} 

export const Outlined = Template.bind({})
Outlined.args = {
  bgColor: 'rgb(245, 158, 11)',
  bgHover: 'rgb(217, 119, 6)',
  textColor: 'rgb(245, 158, 11)',
  textHover: 'rgb(217, 119, 6)',
  disabled: false,
  outlined: true,
  size: 'md',
  children: <MdAdd/>,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: <MdAdd/>,
  disabled: true,
}

export const OutlinedDisabled = Template.bind({})
OutlinedDisabled.args = {
  disabled: true,
  outlined: true,
  size: 'md',
  children: <MdAdd/>,
}
