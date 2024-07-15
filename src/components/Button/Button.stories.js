import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: "Form/Button",
  component: Button,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [(Story) => <Center><Story /></Center>],
  argTypes: {
    type: {
      control: 'select',
      options: Object.freeze(['primary', 'secondary', 'danger', 'success']),
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
    onMouseOver: { action: 'over' }
  },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: "primary",
  disabled: false,
  label: 'Primary',
  size: 'medium',
  
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  type: "secondary",
  disabled: false,
  label: 'Secondary',
  size: 'medium',
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  type: "danger",
  disabled: false,
  label: 'Danger',
  size: 'medium',
};

export const SuccessButton = Template.bind({});
SuccessButton.args = {
  type: "success",
  disabled: false,
  label: 'Success',
  size: 'medium',
};
