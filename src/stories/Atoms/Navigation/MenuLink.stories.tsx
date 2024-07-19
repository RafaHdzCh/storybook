import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { MenuLink } from '../../../components/Atoms/Navigation/MenuLink'

export default {
  title: 'Atoms/Navigation/Menu Link',
  component: MenuLink,
  decorators: [
    (Story) => <div style={ { maxWidth: '200px' } }>
            {Story()}
        </div>
  ]
} as Meta<typeof MenuLink>

const Template: StoryFn<typeof MenuLink> = (args) => <MenuLink {...args} />

export const Sample = Template.bind({})

Sample.args = {
  children: 'Balance'
}
