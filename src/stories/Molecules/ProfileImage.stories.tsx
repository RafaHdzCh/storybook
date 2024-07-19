import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { ProfileImage } from '../../components/Molecules/ProfileImage'

export default {
  title: 'Molecules/Profile Image',
  component: ProfileImage,
} as Meta<typeof ProfileImage>

const Template: StoryFn<typeof ProfileImage> = (args) => <ProfileImage {...args} />

export const Normal = Template.bind({})
Normal.args = {
  image: 'https://i.pravatar.cc/300?img=36',
  label: 'Samantha Karud',
  size: '100px',
  labelSize: '16px'
}
