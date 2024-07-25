import React, { useState } from 'react'
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

const Template: StoryFn<typeof TextInput> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <TextInput {...args} value={value} onChange={handleChange} />;
}

export const TextType = Template.bind({})
TextType.args = 
{
    label: 'Label',
    readonly: false,
    disabled: false,
    placeholder: 'Placeholder',
    type: 'text',
    value: "",
    maxLength: 30,
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
    maxLength: 30,
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
    maxLength: 30,
}
