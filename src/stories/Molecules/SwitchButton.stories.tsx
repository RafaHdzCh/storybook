import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { SwitchButton } from "../../components/Molecules/SwitchButton"

export default {
  title: 'Molecules/Switch Button',
  component: SwitchButton
} as Meta<typeof SwitchButton>
const Template: StoryFn<typeof SwitchButton> = (args) => <SwitchButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
    links: [
        {
            label: 'Público',
            onClick: (ev) => console.log(ev)
        },
        {
            label: 'Privado',
            onClick: (ev) => console.log(ev)
        },
        {
            label: 'Oculto',
            onClick: (ev) => console.log(ev)
        }
    ],
    select: 0
}
