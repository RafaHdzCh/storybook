import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Tooltip } from '../../../components/Atoms/Navigation/Tooltip'


export default {
  title: 'Atoms/Navigation/Tooltip',
  component: Tooltip
} as Meta<typeof Tooltip>
const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Top = Template.bind({})
Top.args = {
  text: 'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet.',
  orientation: 'top'
}

export const Left = Template.bind({})
Left.args = {
  text: 'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet.',
  orientation: 'left'
}

export const Right = Template.bind({})
Right.args = {
  text: 'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet.',
  orientation: 'right'
}

export const Bottom = Template.bind({})
Bottom.args = {
  text: 'Lorem ipsum dolor sit amet dolor sit ametdolor sit amet.',
  orientation: 'bottom'
}
