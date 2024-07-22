import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { TextInput } from '../../../components/Atoms/Inputs/TextInput'

export default {
  title: 'Atoms/Inputs/TextInput',
  component: TextInput,
  decorators: [
    (Story) => <div style={ {maxWidth: '1000px'} }>
        {Story()}
    </div>
  ]
} as Meta<typeof TextInput>

const Template: StoryFn<typeof TextInput> = (args) => <TextInput {...args} />

export const TextType = Template.bind({})
TextType.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text'
}

export const NumberType = Template.bind({})
NumberType.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'number'
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Label',
    disabled: true,
    placeholder: 'Placeholder',
    type: 'text',
    value: 'Disabled'
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
    label: 'Label',
    readonly: true,
    placeholder: 'Placeholder',
    type: 'text',
    value: 'Read Only'
}

