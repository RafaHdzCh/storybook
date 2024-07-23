import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DotBadges, DotBadgesProps } from '../../../components/Atoms/General/DotBadges';

export default {
  title: 'Atoms/General/DotBadges',
  component: DotBadges,
  argTypes: {
    color: { control: 'color' },
    label: { control: 'text' },
  },
} as Meta<typeof DotBadges>;

const Template: StoryFn<DotBadgesProps> = (args: DotBadgesProps) => <DotBadges {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'UNIAT Guadalajara',
  color: '#f43f5e',
};