import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Textarea } from '../../../components/Atoms/Inputs/Textarea'

export default {
  title: 'Atoms/Inputs/Textarea',
  component: Textarea
} as Meta<typeof Textarea>

const Template: StoryFn<typeof Textarea> = (args) => <Textarea {...args} />

export const Normal = Template.bind({})
Normal.args = {
  charactersCounter: false,
  charactersLimit: undefined,
}

export const CharacterCounter = Template.bind({})
CharacterCounter.args = {
  charactersCounter: true,
}

export const CharacterLimit = Template.bind({})
CharacterLimit.args = 
{
  charactersLimit: 30
}
