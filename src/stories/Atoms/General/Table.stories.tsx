import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Table } from '../../../components/Atoms/General/Table';

export default 
{
  title: 'Atoms/General/Table',
  component: Table,
  argTypes: {
    headers: {
      control: 'array',
      description: 'Headers of the table',
    },
    rows: {
      control: 'array',
      description: 'Rows of the table',
    },
  },
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = 
{
  headers: ["Company", "Contact", "Country"],
  rows: 
  [
    ["Alfreds", "Maria Anders", "Germany"],
    ["Centro comercial Moctezuma", "Francisco Chang", "Mexico"],
    ["Ernst Handel", "Roland Mendel", "Austria"],
    ["Island Trading", "Helen Bennett", "UK"],
    ["Laughing Bacchus Winecellars", "Yoshi Tannamuri", "Canada"],
    ["Magazzini Alimentari Riuniti", "Giovanni Rovelli", "Italy"],
  ],
  bgDarkColor: "#7dd3fc",
  bgLightColor: "#bae6fd",
  bgHeaderColor: "#38bdf8",
  textRowColor: "#082f49",
  textHeaderColor: "#f0f9ff",
};
