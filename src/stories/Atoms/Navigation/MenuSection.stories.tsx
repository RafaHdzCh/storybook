import React from 'react';

import { StoryFn, Meta} from '@storybook/react';
import { MenuSection } from '../../../components/Atoms/Navigation/MenuSection'

export default {
    title: 'Atoms/Navigation/Menu Section',
    componen: MenuSection,
    decorators: [
        story => <div style={ {maxWidth: '250px'} }>
            {story()}
        </div>
    ]
} as Meta<typeof MenuSection>

const Template: StoryFn<typeof MenuSection> = (args) => <MenuSection {...args} />

export const WithLinks = Template.bind({})
WithLinks.args = {
    label: 'Profile',
    links: [ 
        {
            label: 'Personal information',
            link: ''
        },
        {
            label: 'Balance',
            link: ''
        },
        {
            label: 'Settings',
            link: ''
        }
    ]
}

export const WithoutLinks = Template.bind({})
WithoutLinks.args = {
    label: 'Home'
}