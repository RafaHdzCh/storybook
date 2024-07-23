import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Collapse } from '../../components/Molecules/Collapse'

export default {
  title: 'Molecules/Collapse',
  component: Collapse,
  argTypes: 
  {
    children: { table: { disable: true } },
  },
  decorators: [
    (Story) => <div style={ {maxWidth: '600px'} }>
      {Story()}
    </div>
  ]
} as Meta<typeof Collapse>

const Template: StoryFn<typeof Collapse> = (args) => <Collapse {...args} />

export const Sample = Template.bind({})
Sample.args = {
    label: 'Collapse sample',
    titleColor: "#14b8a6",
    childrenColor: "#99f6e4",
    children: 
    <React.Fragment>
      <h1 className='text-xl mb-2'>Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eligendi tempore dolore laudantium recusandae beatae laboriosam, earum excepturi nam consequatur dolor voluptatem ea perferendis dolores dolorum! Asperiores repellat illo quia.</p>
    </React.Fragment>
}