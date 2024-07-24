import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tabss } from '../../components/Molecules/Tabs';

export default {
  title: 'Molecules/Tabs',
  component: Tabss,
  decorators: [
    (Story) => <div style={{ maxWidth: '600px' }}>{Story()}</div>
  ]
} as Meta<typeof Tabss>;

const Template: StoryFn<typeof Tabss> = (args) => <Tabss {...args} />;

export const Sample = Template.bind({});
Sample.args = 
{
  tabTitles: 
  ["First Tab", "Second Tab","Third Tab"],
  tabContents: 
  [
    "This is the content for the first tab. It contains detailed information relevant to this tab.",
    "This is the content for the second tab. It provides insights and data for the second tab.",
    "This is the content for the third tab. It provides useful information for the third tab about the two previous tabs."
  ],
  tabBgColor: "#bbf7d0",
  tabTextColor: "#15803d",
  tabBgActiveColor: "#a5f3fc",
  tabTextActiveColor: "#0e7490",
  tabContentBgColor: "#fef3c7",
  tabContentTextColor: "#b45309",
  borderColor: "#15803d",
};
