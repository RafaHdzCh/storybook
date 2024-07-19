import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Card } from '../../components/Molecules/Card'
import { TextInput } from '../../components/Atoms/Inputs/TextInput'
import { Button } from '../../components/Atoms/Inputs/Button'
import { Dropdown } from '../../components/Atoms/Inputs/Dropdown'
import { Section } from '../../components/Molecules/Section'

export default {
  title: 'Molecules/Section',
  component: Section,
  decorators: [
    (Story) => <div style={ { maxWidth: '1000px' } }>
        {Story()}
    </div>
  ]
} as Meta<typeof Section>

const Template: StoryFn<typeof Section> = (args) => <Section {...args} />

export const ContactExample = Template.bind({})
ContactExample.args = {
  title: 'Datos de Contacto',
  children: <div>
        <p className='text-gray-400 text-sm mt-3'>Teléfono Móvil</p>
        <p className='pl-0 sm:pl-6'>33 3888 5667</p>
        <p className='text-gray-400 text-sm mt-3'>Teléfono de Casa</p>
        <p className='pl-0 sm:pl-6'>33 3315 4675</p>
        <p className='text-gray-400 text-sm mt-3'>Teléfono de Trabajo</p>
        <p className='pl-0 sm:pl-6'>33 3485 2729</p>
        <p className='text-gray-400 text-sm mt-3'>Correo Personal</p>
        <p className='pl-0 sm:pl-6'>juan_alberto_ma@mimail.com.mx</p>
        <p className='text-gray-400 text-sm mt-3'>Correo Académico</p>
        <p className='pl-0 sm:pl-6'>juan.alberto.medina@uniat.edu.mx</p>
    </div>

}

export const TaskListExample = Template.bind({})
TaskListExample.args = {
  title: 'Task List (Using Cards)',
  children: <div className='grid gap-3 grid-cols-3'>
        <Card title='Go to the groceries store'>
            <h1>Shopping list</h1>
            <ul className='font-light'>
                <li>1 Kg. Eggs</li>
                <li>2 Lt. Milk</li>
                <li>4 Kg. Vegetables</li>
            </ul>
        </Card>
        <Card title='Caress the cat'>
            <div>
                <div className='px-10'>
                    <img className='rounded-lg shadow-md mb-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="A cat" />
                </div>
                <p><b>Date:</b> 01/Aug/2022</p>
                <p><b>Caress during:</b> 45 Sec.</p>
            </div>
        </Card>
        <Card title='Do nothing'>
            <p><b>Date:</b> Today</p>
            <p><b>During: </b> 20 hrs</p>
            <p>😋</p>
        </Card>
    </div>

}

export const FormExample = Template.bind({})
FormExample.args = {
  title: 'Register Form',
  children: <div>
    <div className='flex mb-2 space-x-4'>
      <TextInput label='Name' />
      <TextInput label='Last Name' />
    </div>
    <div className='grid gap-4 grid-cols-7 mb-6'>
      <div className='col-span-4'>
        <TextInput label='Address' />
      </div>
      <div className='col-span-2'>
        <TextInput label='Telephone number' type='number' />
      </div>
      <div className='col-span-1'>
        <Dropdown 
          label='Country'
          options={[
            { value: 'default', label: '-----------' },
            { value: 'mexico', label: 'México' },
            { value: 'us', label: 'United States' },
            { value: 'canada', label: 'Canada' }
          ]}
        />
      </div>
    </div>
    <hr className='pb-4 border-top-[1px] border-gray-300' />
    <div className='flex justify-end'>
      <Button label="Submit" size='md' />
    </div>
  </div>
}
