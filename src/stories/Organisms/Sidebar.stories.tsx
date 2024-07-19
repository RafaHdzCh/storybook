import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Sidebar } from '../../components/Organisms/Sidebar'
import { MenuSection } from '../../components/Atoms/Navigation/MenuSection'

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar
} as Meta<typeof Sidebar>

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Normal = Template.bind({})
Normal.args = {
  actived: true,
  children: <div>
    <MenuSection label='Home' />
    <MenuSection label='Profile' links={[{label: 'Account', link: ''}, {label: 'Setting', link: ''}, {label: 'Balance', link: ''}]} />
    <MenuSection label='Schedule' links={[{label: 'Schelude view', link: ''}, {label: 'Schedule creation', link: ''}]} />
  </div>
}

