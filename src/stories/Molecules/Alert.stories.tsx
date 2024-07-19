import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Alert } from '../../components/Molecules/Alert'

export default {
  title: 'Molecules/Alerts',
  component: Alert
} as Meta<typeof Alert>

const Template: StoryFn<typeof Alert> = (args) => <Alert {...args}/>

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  title: 'Success title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus non voluptates quas ea animi, repellendus aspernatur illo tempore quia nostrum quod placeat iusto iste. Repellendus, soluta iste. Ex, asperiores!'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  title: 'Warning title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga a distinctio voluptate necessitatibus architecto, obcaecati ea praesentium animi repellendus modi optio. Ipsum veritatis voluptatem, cupiditate aperiam culpa quaerat non?'
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  title: 'Danger title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa cupiditate voluptatum. Aperiam possimus eos voluptate laboriosam quas tempora beatae odit blanditiis fuga similique veniam, nisi reprehenderit quasi deserunt et.'
}

export const Info = Template.bind({})
Info.args = {
  type: 'info',
  title: 'Info title',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus a adipisci perspiciatis molestias iste architecto atque obcaecati voluptates. Aliquam dicta dolore suscipit magnam eligendi amet, dolorem consequuntur obcaecati accusamus pariatur!'
}
