import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Carousel } from '../../components/Molecules/Carousel';

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  argTypes: 
  {
    children: { table: { disable: true } },
  },
} as Meta<typeof Carousel>;

const Template: StoryFn<typeof Carousel> = (args) => <Carousel {...args} />;

export const AutoSlide = Template.bind({});
AutoSlide.args = {
  timer: 4000,
  height: "30vw",
  width: "75vw",
  dotColor: "#6d28d9",
  bgColor: "#c4b5fd",
  children: [
    <section key="1" className='grid place-content-center'>
      <h3 className='text-xl font-bold'>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </section>,
    <section key="2" className='grid place-content-center'>
      <h3 className='text-xl font-bold'>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>,
    <section key="3" className='grid place-content-center'>
      <h3 className='text-xl font-bold'>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </section>,
  ],
};

export const ManualSlide = Template.bind({});
ManualSlide.args = {
  height: "30vw",
  width: "75vw",
  children: [
    <section key="1" className='grid place-content-center'>
      <h3 className='text-2xl font-bold'>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </section>,
    <section key="2" className='grid place-content-center'>
      <h3 className='text-2xl font-bold'>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>,
    <section key="3" className='grid place-content-center'>
      <h3 className='text-2xl font-bold'>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </section>,
  ],
};
