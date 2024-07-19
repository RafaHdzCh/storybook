import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { PageLoader } from '../../components/Molecules/PageLoader'

export default {
  title: 'Molecules/PageLoader',
  component: PageLoader
} as Meta<typeof PageLoader>

const Template: StoryFn<typeof PageLoader> = (args) => <PageLoader {...args} />

export const Normal = Template.bind({})
Normal.args = {
  enabled: true
}