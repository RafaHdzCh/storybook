import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Timeline } from '../../components/Organisms/Timeline'


export default {
  title: 'Organisms/Timeline',
  component: Timeline,
  decorators: [
    (story) => <div style={{ maxWidth: '400px' }}>
      {story()}
    </div>
  ]
} as Meta<typeof Timeline>
const Template: StoryFn<typeof Timeline> = (args) => <Timeline {...args} />

export const Ascending = Template.bind({})
Ascending.args = {
  order: 'asc',
  dates: [
    {
      date: new Date('Sep 01 2022 09:10:09'),
      description: 'Maecenas fringilla id mi nec hendrerit. Vivamus facilisis ultrices neque eget auctor.'
    },
    {
      date: new Date('August 1 2022 10:00:00'),
      description: 'Morbi vel metus est. Sed sodales luctus neque non laoreet. Quisque et facilisis sem, ac efficitur ex.'
    },
    {
      date: new Date('Mar 12 2012 10:00:00'),
      description: 'Fusce in fermentum risus, vel accumsan sapien. Pellentesque sagittis urna aliquam ipsum lacinia laoreet.'
    }
  ]
}

export const Descending = Template.bind({})
Descending.args = {
  order: 'desc',
  dates: [
    {
      date: new Date('Sep 01 2022 09:10:09'),
      description: 'Maecenas fringilla id mi nec hendrerit. Vivamus facilisis ultrices neque eget auctor.'
    },
    {
      date: new Date('August 1 2022 18:35:00'),
      description: 'Morbi vel metus est. Sed sodales luctus neque non laoreet. Quisque et facilisis sem, ac efficitur ex.'
    },
    {
      date: new Date('Mar 12 2012 10:00:00'),
      description: 'Fusce in fermentum risus, vel accumsan sapien. Pellentesque sagittis urna aliquam ipsum lacinia laoreet.'
    }
  ]
}
