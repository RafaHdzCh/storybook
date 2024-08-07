import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Calendar } from '../../components/Organisms/Calendar'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default {
  title: 'Organisms/Calendar',
  component: Calendar,
  decorators: [
    (story) => <div style={{ maxWidth: '900px' }}>
      {story()}
    </div>
  ]
} as Meta<typeof Calendar>
const Template: StoryFn<typeof Calendar> = (args) => <Calendar {...args} />

export const Normal = Template.bind({})
Normal.args = {
  onChange: (task) => {}
}
