import React from 'react';
import { Meta } from '@storybook/react';
import { Tag, TagProps } from '../../../components/Atoms/General/Tag';

export default {
  title: 'Atoms/General/Tag',
  component: Tag,
} as Meta<typeof Tag>;

export const Success = (args: TagProps) => <Tag {...args} />;

Success.args = {
  label: 'Cine y Animación Digital',
  bgColor: "#e11d48",
  textColor: "#fff1f2",
};