import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { Checkbox } from '../../../components/Atoms/Inputs/Checkbox'

export default {
  title: 'Atoms/Inputs/Checkbox',
  component: Checkbox
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Checkbox',
  checked: false
}
