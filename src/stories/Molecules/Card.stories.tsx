import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Card } from '../../components/Molecules/Card'
import { Button } from '../../components/Atoms/Inputs/Button'

export default {
  title: 'Molecules/Card',
  component: Card,
  decorators: [
    (Story) => <div style={ {maxWidth: '400px'} }>
        {Story()}
    </div>
  ]
} as Meta<typeof Card>
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />

export const FinanceExample = Template.bind({})
FinanceExample.args = {
    title: 'Lorem ipsum dolor sit',
    children: <div className='w-full'>
        <h1 className='text-3xl text-gray-600 text-center'>$3,200.00</h1>
        <p className='text-center antialiased mt-1 mb-2'>Fecha de vencimiento: 30/May/2022</p>
        <div className='flex justify-center'>
            <Button label='Pagar' size='xl'/>
        </div>
    </div>
}

export const ImageExample = Template.bind({})
ImageExample.args = {
    title: 'This is an image',
    children: <div className='w-full'>
        <img className='rounded shadow-md' src="https://picsum.photos/200" alt="" />
        <div className='flex justify-center mt-2'>
            <Button label='Descargar' size='xl'/>
        </div>
    </div> 
}
