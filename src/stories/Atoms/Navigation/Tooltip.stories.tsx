import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Tooltip } from '../../../components/Atoms/Navigation/Tooltip'

export default 
{
  title: 'Atoms/Navigation/Tooltip',
  component: Tooltip
} as Meta<typeof Tooltip>
const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Top = Template.bind({})
Top.args = {
  buttonLabel: "Hover me",
  orientation: 'top',
  text: 'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet.',
}

export const Left = Template.bind({})
Left.args = {
  buttonLabel: "Hover me",
  orientation: 'left',
  text: 'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet.',
}

export const Right = Template.bind({})
Right.args = {
  buttonLabel: "Hover me",
  orientation: 'right',
  text: 'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet.',
}

export const Bottom = Template.bind({})
Bottom.args = {
  buttonLabel: "Hover me",
  orientation: 'bottom',
  text: 'Lorem ipsum dolor sit amet dolor sit ametdolor sit amet.',
}
