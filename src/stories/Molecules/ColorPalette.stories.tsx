import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { ColorPalette } from '../../components/Molecules/ColorPalette'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default {
  title: 'Molecules/Color Palette',
  component: ColorPalette,
  argTypes: {
    primary: {
      control: {
        type: 'color'
      }
    },
    secondary: {
      control: {
        type: 'color'
      }
    },
    complementary: {
      control: {
        type: 'color'
      }
    },
    secondaryText: {
      control: {
        type: 'color'
      }
    },
    primaryText: {
      control: {
        type: 'color'
      }
    }
  },
  decorators: [
    (story) => <div style={{ maxWidth: '900px' }}>
      {story()}
    </div>
  ]
} as Meta<typeof ColorPalette>
const Template: StoryFn<typeof ColorPalette> = (args) => <ColorPalette {...args} />

export const Normal = Template.bind({})
Normal.args = {
  primary: '#f39200',
  background: '#f1e4de',
  secondary: '#ffffff',
  complementary: '#e58a02',
  primaryText: '#ffffff',
  secondaryText: '#333333'
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  primary: '#242424',
  background: '#323232',
  secondary: '#242424',
  complementary: '#e66902',
  primaryText: '#ffffff',
  secondaryText: '#e8e8e8'
}

export const Pastel = Template.bind({})
Pastel.args = {
  primary: '#fce3ff',
  background: '#dfe7f2',
  secondary: '#ffffff',
  complementary: '#7c1bc9',
  primaryText: '#e600b3',
  secondaryText: '#3b1ec4'
}
