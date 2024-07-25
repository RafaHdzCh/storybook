import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Slider, SliderProps } from '../../../components/Atoms/Inputs/Slider';

export default {
  title: 'Atoms/Inputs/Slider',
  component: Slider,
} as Meta<typeof Slider>;

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const DefaultSlider = Template.bind({});
DefaultSlider.args = {
  min: 0,
  max: 100,
  value: 5,
  sizeInPixels: 200,
  step: 1,
  handleColor: '#84cc16',
  trackColor: '#e5e5e5',
  trackActiveColor: '#d9f99d',
};