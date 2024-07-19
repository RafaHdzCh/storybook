import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Schedule } from '../../components/Organisms/Schedule'

export default {
  title: 'Organisms/Schedule',
  component: Schedule,
  decorators: [
    (story) => <div style={{ maxWidth: '350px' }}>
      {story()}
    </div>
  ]
} as Meta<typeof Schedule>
const Template: StoryFn<typeof Schedule> = (args) => <Schedule {...args} />

export const Guadalajara = Template.bind({})
Guadalajara.args = {
  data: {
    id: '937',
    campus: 'Guadalajara',
    asignature: 'Técnicas de aprendizaje',
    day: 'Monday',
    startsAt: '9:00',
    endsAt: '11:00',
    teacher: 'María Paz Bascuñan Illanes',
    classroom: 'C',
    group: '1 CAD - GDL 2022 B-A',
    studentsCount: 22,
    students: [
      {
        matricula: 'CAD094',
        photo: 'https://i.pravatar.cc/150?img=3',
        name: 'Rodolfo Méndez'
      },
      {
        matricula: 'CAD435',
        photo: 'https://i.pravatar.cc/150?img=5',
        name: 'Karina González'
      },
      {
        matricula: 'CAD0932',
        photo: 'https://i.pravatar.cc/150?img=4',
        name: 'Oscar Martínez'
      }
    ]
  }
}

export const SanLuisPotosí = Template.bind({})
SanLuisPotosí.args = {
  data: {
    id: '937',
    campus: 'San Luis Potosí',
    asignature: 'Técnicas de aprendizaje',
    day: 'Monday',
    startsAt: '9:00',
    endsAt: '11:00',
    teacher: 'María Paz Bascuñan Illanes',
    classroom: 'C',
    group: '1 CAD - GDL 2022 B-A',
    studentsCount: 22,
    students: [
      {
        matricula: 'CAD094',
        photo: 'https://i.pravatar.cc/150?img=3',
        name: 'Rodolfo Méndez'
      },
      {
        matricula: 'CAD435',
        photo: 'https://i.pravatar.cc/150?img=5',
        name: 'Karina González'
      },
      {
        matricula: 'CAD0932',
        photo: 'https://i.pravatar.cc/150?img=4',
        name: 'Oscar Martínez'
      }
    ]
  }
}

export const Tijuana = Template.bind({})
Tijuana.args = {
  data: {
    id: '937',
    campus: 'Tijuana',
    asignature: 'Técnicas de aprendizaje',
    day: 'Monday',
    startsAt: '9:00',
    endsAt: '11:00',
    teacher: 'María Paz Bascuñan Illanes',
    classroom: 'C',
    group: '1 CAD - GDL 2022 B-A',
    studentsCount: 22,
    students: [
      {
        matricula: 'CAD094',
        photo: 'https://i.pravatar.cc/150?img=3',
        name: 'Rodolfo Méndez'
      },
      {
        matricula: 'CAD435',
        photo: 'https://i.pravatar.cc/150?img=5',
        name: 'Karina González'
      },
      {
        matricula: 'CAD0932',
        photo: 'https://i.pravatar.cc/150?img=4',
        name: 'Oscar Martínez'
      }
    ]
  }
}

export const Global = Template.bind({})
Global.args = {
  data: {
    id: '937',
    campus: 'Global',
    asignature: 'Técnicas de aprendizaje',
    day: 'Monday',
    startsAt: '9:00',
    endsAt: '11:00',
    teacher: 'María Paz Bascuñan Illanes',
    classroom: 'C',
    group: '1 CAD - GDL 2022 B-A',
    studentsCount: 22,
    students: [
      {
        matricula: 'CAD094',
        photo: 'https://i.pravatar.cc/150?img=3',
        name: 'Rodolfo Méndez'
      },
      {
        matricula: 'CAD435',
        photo: 'https://i.pravatar.cc/150?img=5',
        name: 'Karina González'
      },
      {
        matricula: 'CAD0932',
        photo: 'https://i.pravatar.cc/150?img=4',
        name: 'Oscar Martínez'
      }
    ]
  }
}
