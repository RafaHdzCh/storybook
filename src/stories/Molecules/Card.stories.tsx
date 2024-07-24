import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Card } from '../../components/Molecules/Card'
import { Button } from '../../components/Atoms/Inputs/Button'
import { ButtonVariants } from '../../stories/Atoms/Inputs/Button.stories';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes:
  {
    children: { table: { disable: true } }
  },
  decorators: [
    (Story) => <div style={ {maxWidth: '400px'} }>
        {Story()}
    </div>
  ]
} as Meta<typeof Card>
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />

export const FinanceExample = Template.bind({})
FinanceExample.args = 
{
    title: 'Ficha de pago',
    titleTextColor: "#4d7c0f", 
    titleBgColor:"#ecfccb", 
    containerTextColor:"#0e7490", 
    containerBgColor:"#cffafe",

    children: (
        <div className='w-full'>
            <h1 className='text-3xl text-center'>$3,200.00</h1>
            <div className='flex justify-center'>
                <img className='rounded shadow-md my-4' src="https://picsum.photos/200" alt="" />
            </div>
            <p className='text-center antialiased mt-1 mb-2'>Fecha de vencimiento: 30/May/2022</p>
            <div className='flex justify-center mt-4'>
            <Button {...ButtonVariants.info} />
            </div>
        </div>
    )
}