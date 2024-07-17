import React from 'react';
import { Meta } from '@storybook/react';
import { Tag, TagProps } from '../../components/Atoms/Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
} as Meta<typeof Tag>;

export const Success = (args: TagProps) => <Tag {...args} />;

Success.args = {
  label: 'Cine y Animación Digital',
};