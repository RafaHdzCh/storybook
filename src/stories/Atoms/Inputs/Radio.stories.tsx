import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Radio } from '../../../components/Atoms/Inputs/Radio'

export default {
  title: 'Atoms/Inputs/Radio',
  component: Radio
} as Meta<typeof Radio>

const Template: StoryFn<typeof Radio> = (args) => <Radio {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Radio',
  group: '1',
  checked: false,
  defaultChecked: false
}
