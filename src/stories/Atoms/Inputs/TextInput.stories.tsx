import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { TextInput } from '../../../components/Atoms/Inputs/TextInput'

export default 
{
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
TextType.args = 
{
    label: 'Label',
    readonly: false,
    disabled: false,
    placeholder: 'Placeholder',
    type: 'text',
    value: "",
}

export const NumberType = Template.bind({})
NumberType.args = 
{
    label: 'Label',
    readonly: false,
    disabled: false,
    placeholder: 'Placeholder',
    type: 'number',
    value: "",
}

export const ReadOnly = Template.bind({})
ReadOnly.args = 
{
    label: 'ReadOnly:',
    readonly: true,
    disabled: false,
    placeholder: 'Placeholder',
    type: 'text',
    value: "",
}

