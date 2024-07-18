import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Select, SelectProps } from "@fluentui/react-components";
import { useId } from "@fluentui/react-hooks";
import { SelectOption } from '../../../components/Atoms/Inputs/Select';

export default {
  title: 'Atoms/Inputs/Select',
  component: Select,
} as Meta;

interface TemplateProps extends SelectProps {
  options?: string[];
}

const Template: StoryFn<TemplateProps> = ({ options = [], ...args }) => {
  const selectId = useId();

  return (
      <SelectOption id={selectId} {...args}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </SelectOption>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: ['Red', 'Green', 'Blue']
};
