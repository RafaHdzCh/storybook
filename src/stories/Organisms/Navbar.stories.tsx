import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Navbar } from '../../components/Organisms/Navbar'
import { Button } from '../../components/Atoms/Inputs/Button';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
  decorators: [
    (story) => <div style={{ height: '3000px '}}>
      <div style={{position: 'absolute', left: 0, top: 0 }}>
        {story()}
      </div>
    </div>
  ]
} as Meta<typeof Navbar>
const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />

export const Normal = Template.bind({})
Normal.args = {
  position: 'static',
  backgroundColor: 'rgb(251 113 133)',
  children: <div className='flex text-white justify-between'>
      <a href='/' className='self-center text-white text-xl'>
        LOGO
      </a>
    <div className='flex self-center justify-between'>
      <p className='px-3 cursor-pointer py-4 hover:bg-rose-500'>
        Blog
      </p>
      <p className='px-3 cursor-pointer py-4 hover:bg-rose-500'>
        Pricing
      </p>
    </div>
    <div className='flex space-x-4'>
      <p className='cursor-pointer self-center '>
        Login
      </p>
      <Button label='REGISTER' />
    </div>
  </div>
}

export const Transparent = Template.bind({})
Transparent.args = {
  position: 'fixed',
  style: 'transparent',
  children: <div className='flex text-gray-600 justify-between'>
      <a href='/' className='self-center text-xl hover:text-gray-900'>
        LOGO
      </a>
    <div className='flex self-center justify-between'>
      <p className='px-3 cursor-pointer py-4 hover:text-gray-900'>
        Blog
      </p>
      <p className='px-3 cursor-pointer py-4 hover:text-gray-900'>
        Pricing
      </p>
    </div>
    <div className='flex space-x-4'>
      <p className='cursor-pointer self-center hover:text-gray-900'>
        Login
      </p>
      <Button label='REGISTER' />
    </div>
  </div>
}

export const Blurred = Template.bind({})
Blurred.args = {
  position: 'fixed',
  style: 'blurred',
  children: <div className='flex text-gray-600 justify-between'>
      <a href='/' className='self-center text-xl'>
        LOGO
      </a>
    <div className='flex self-center justify-between'>
      <p className='px-3 cursor-pointer py-4 hover:bg-rose-100/80'>
        Blog
      </p>
      <p className='px-3 cursor-pointer py-4 hover:bg-rose-100/80'>
        Pricing
      </p>
    </div>
    <div className='flex space-x-4'>
      <p className='cursor-pointer self-center'>
        Login
      </p>
      <Button label='REGISTER' />
    </div>
  </div>
}
