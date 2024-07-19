import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { ThemeSelector } from '../../components/Organisms/ThemeSelector'

export default {
  title: 'Organisms/ThemeSelector',
  component: ThemeSelector
} as Meta<typeof ThemeSelector>

const Template: StoryFn<typeof ThemeSelector> = (args) => <ThemeSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {
  themeMenu: false,
  setThemeMenu: (action: boolean) => {}
}
