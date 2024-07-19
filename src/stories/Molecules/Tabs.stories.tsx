import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Tabs } from '../../components/Molecules/Tabs'

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  decorators: [
    (Story) => <div style={ { maxWidth: '600px' } }>
      {Story()}
    </div>
  ]
} as Meta<typeof Tabs>

const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />

export const Sample = Template.bind({})
Sample.args = {
  tabs: ['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4', 'TAB 5', 'TAB 6', 'TAB 7', 'TAB 8', 'TAB 9', 'TAB 10'],
  color: 'blue', // Asegúrate de proporcionar un color o elimina esta propiedad si no es necesaria.
  selected: 0,
  children: (
    <React.Fragment>
      <section>
        <h1 className='text-xl'>Tab 1 Section</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum culpa repellendus quod, iure nihil saepe, vero dicta dolor laboriosam a quia voluptatem eveniet aspernatur ipsa voluptatibus harum et porro rerum?</p>
      </section>
      {/* Agrega más secciones según sea necesario */}
    </React.Fragment>
  ),
}
