import React from 'react'
//import { MdDownload} from "react-icons/md";
import { StoryFn, Meta } from '@storybook/react'
import { Table, Row } from '../../../components/Atoms/Navigation/Table'

export default {
  title: 'Atoms/Navigation/Table',
  component: Table,
  decorators: [
    (Story) => <div style={ {maxWidth: '600px'} }>
        {Story()}
    </div>
  ]
} as Meta<typeof Table>

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />

export const Sample = Template.bind({})
Sample.args = {
    children: <React.Fragment>
        <Row>
            <th align='left'>Concept</th>
            <th align='right'>Amount</th>
            <th align='center'>Date</th>
        </Row>
        <Row>
            <td align='left'>Advance payment</td>
            <td align='right'>$1,500.00</td>
            <td align='center'>08/AGO/2022</td>
        </Row>
        <Row>
            <td align='left'>Semester</td>
            <td align='right'>$4,000.00</td>
            <td align='center'>22/JUN/2022</td>
        </Row>
        <Row>
            <td align='left'>Courses</td>
            <td align='right'>$150.00</td>
            <td align='center'>15/MAY/2022</td>
        </Row>
    </React.Fragment>
}