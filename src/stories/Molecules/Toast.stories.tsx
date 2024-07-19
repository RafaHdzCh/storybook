import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Toast } from '../../components/Molecules/Toast'

export default {
  title: 'Molecules/Toast',
  component: Toast
} as Meta<typeof Toast>
const Template: StoryFn<typeof Toast> = (args) => <Toast {...args} />

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  text: 'Changes saved successfully!',
  timeout: 6000
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  text: 'Please complete all the fields!',
  timeout: 6000
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  text: 'Oops... An error was occurred',
  timeout: 6000
}

export const Mobile = Template.bind({})
Mobile.args = {
  type: 'success',
  text: 'Changes saved successfully!',
  timeout: 6000,
  responsive: 'mobile'
}
