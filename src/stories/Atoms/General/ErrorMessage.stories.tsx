import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {ErrorMessage, ErrorMessageProps} from '../../../components/Atoms/General/ErrorMessage';

export default 
{
  title: "Atoms/General/ErrorMessage",
  component: ErrorMessage
} as Meta<typeof ErrorMessage>;

const Template: StoryFn<ErrorMessageProps> = (args) => <ErrorMessage {...args} />;

export const Error = Template.bind({});
Error.args = 
{
  title: "Error 404",
  message: "This page does not exist",
  buttonLabel: "Back to Homepage",
  bgColor: "#262626",
  bgModalColor: "#52525b",
  titleColor: "#d4d4d4",
  textColor: "#f5f5f5",
};