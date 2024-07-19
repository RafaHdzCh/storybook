import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { SweetAlert } from '../../components/Molecules/SweetAlert'

export default {
  title: 'Molecules/Sweet Alert',
  component: SweetAlert
} as Meta<typeof SweetAlert>

const Template: StoryFn<typeof SweetAlert> = (args) => <SweetAlert {...args}/>

export const Success = Template.bind({})
Success.args = {
  show: true,
  type: 'success',
  label: 'Save changes?',
  text: 'Are you sure you want to save changes?',
  onConfirm: () => console.log('Action confirmed'),
  onCancel: () => console.log('Action canceled')
}

export const Warning = Template.bind({})
Warning.args = {
  show: true,
  type: 'warning',
  label: 'This action could cause instabilities',
  text: 'Do you want to continue anyway?',
  onConfirm: () => console.log('Action confirmed'),
  onCancel: () => console.log('Action canceled')
}

export const Danger = Template.bind({})
Danger.args = {
  show: true,
  type: 'danger',
  label: 'Are you sure?',
  text: 'This action will delete the items permanently',
  onConfirm: () => console.log('Action confirmed'),
  onCancel: () => console.log('Action canceled')
}
