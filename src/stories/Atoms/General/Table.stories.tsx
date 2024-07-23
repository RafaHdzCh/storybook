import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Table } from "../../../components/Atoms/General/Table"

export default {
  title: 'Atoms/General/Table',
  component: Table,
  argTypes: 
  {
    
  },
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = () => <Table />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {};