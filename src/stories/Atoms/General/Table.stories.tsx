import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Table } from '../../../components/Atoms/General/Table';

export default {
  title: 'Atoms/General/Table',
  component: Table,
  argTypes: {
    headers: {
      control: 'object', 
      description: 'Headers of the table',
    },
    rows: {
      control: 'object',
      description: 'Rows of the table',
    },
    bgHeaderColor: {
      control: 'color',
      description: 'Background color of the header',
    },
    bgDarkColor: {
      control: 'color',
      description: 'Background color of the dark rows',
    },
    bgLightColor: {
      control: 'color',
      description: 'Background color of the light rows',
    },
    textHeaderColor: {
      control: 'color',
      description: 'Text color of the header',
    },
    textRowColor: {
      control: 'color',
      description: 'Text color of the rows',
    },
  },
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  headers: ["Company", "Contact", "Country"],
  rows: [
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
