import React from 'react';
import { Meta } from '@storybook/react';
import { Badges, BadgesProps } from '../../components/Atoms/Badges';

export default {
  title: 'Atoms/Badges',
  component: Badges,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'fail'],
      },
    },
    label: { control: 'text' },
  },
} as Meta<typeof Badges>;

const Template: (args: BadgesProps) => JSX.Element = (args) => <Badges {...args} />;

export const Success = () => <Template type="success" label="Success" />;
export const Info = () => <Template type="info" label="Info" />;
export const Warning = () => <Template type="warning" label="Warning" />;
export const Fail = () => <Template type="fail" label="Fail" />;
