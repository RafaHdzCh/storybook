import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Modal } from '../../components/Molecules/Modal'
import { Button } from '../../components/Atoms/Inputs/Button'

export default {
  title: 'Molecules/Modal',
  component: Modal
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args}/>

export const Normal = Template.bind({})
Normal.args = {
  title: 'Modal',
  toggle: true,
  width: '800px',
  children: <React.Fragment>
    <h1 className='text-xl pb-1'>This is a modal content sample</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates, nobis officia consequuntur voluptas odio maxime. Harum, esse veritatis pariatur at aliquam porro reprehenderit quia numquam cumque corrupti optio voluptate?</p>
    <div className='flex mt-4 justify-end'>
      <Button label="MODAL" />
    </div>
  </React.Fragment>
}
