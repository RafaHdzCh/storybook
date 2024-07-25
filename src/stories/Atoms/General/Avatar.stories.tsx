import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {Avatar, AvatarProps} from '../../../components/Atoms/General/Avatar';

export default {
  title: "Atoms/General/Avatar",
  component: Avatar
} as Meta<typeof Avatar>;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const SquareAvatar = Template.bind({});
SquareAvatar.args = 
{
  src: "https://i.pravatar.cc/300?img=36",
  size: 50,
  shape: "square"
};

export const CircleAvatar = Template.bind({});
CircleAvatar.args = 
{
  src: "https://i.pravatar.cc/300?img=36",
  size: 50,
  shape: "circle"
};