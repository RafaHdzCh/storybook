import * as React from 'react';
import { Spinner } from '@fluentui/react-components';
import type { SpinnerProps } from '@fluentui/react-components';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/Navigation/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'A Spinner component from Fluent UI for indicating loading states.',
      },
    },
  },
} as Meta;

const Template: StoryFn<Partial<SpinnerProps>> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};