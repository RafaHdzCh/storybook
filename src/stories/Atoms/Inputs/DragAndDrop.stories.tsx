import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { DragAndDrop } from '../../../components/Atoms/Inputs/DragAndDrop'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export default {
  title: 'Atoms/Inputs/DragAndDrop',
  component: DragAndDrop,
  decorators: [
    (Story) => (
    <DndProvider backend={HTML5Backend}>  
      {Story()}
    </DndProvider>)
  ]
} as Meta<typeof DragAndDrop>

const Template: StoryFn<typeof DragAndDrop> = (args) => <DragAndDrop {...args} />

export const Normal = Template.bind({})
Normal.args = {}
