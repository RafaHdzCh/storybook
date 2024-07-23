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
    bgColor: "#d9f99d",
    textColor: "#65a30d",
    bgActiveColor: "#a5f3fc",
    textActiveColor: "#0891b2",
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
        },
    ],
    select: 0
}
