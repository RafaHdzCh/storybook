import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DragAndDrop } from '../../../components/Atoms/Inputs/DragAndDrop';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

export default {
  title: 'Atoms/Inputs/DragAndDrop',
  component: DragAndDrop,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        {Story()}
      </DndProvider>
    ),
  ],
  argTypes: {
    bgColor: { control: 'color' },
    bgHover: { control: 'color' },
    textColor: { control: 'color' },
    iconColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as Meta<typeof DragAndDrop>;

const Template: StoryFn<typeof DragAndDrop> = (args) => <DragAndDrop {...args} />;

export const SingleFile = Template.bind({});
SingleFile.args = {
  multipleFiles: false,
  bgColor: '#f0f9ff',
  bgHover: '#e0f2fe',
  textColor: '#0ea5e9',
  iconColor: '#0284c7',
  borderColor: '#0ea5e9',
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multipleFiles: true,
  bgColor: '#f0f9ff',
  bgHover: '#e0f2fe',
  textColor: '#0ea5e9',
  iconColor: '#0284c7',
  borderColor: '#0ea5e9',
};
