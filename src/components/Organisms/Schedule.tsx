import React, { useState } from 'react'
import { MdOutlineSchool, MdOutlineGroups } from 'react-icons/md'
import { Modal } from '../Molecules/Modal'
import { Button } from '../Atoms/Inputs/Button'
import { ProfileImage } from '../Molecules/ProfileImage'

interface Studets {
  matricula: string;
  photo: string;
  name: string;
}

interface Data {
  id: string;
  campus: 'Guadalajara' | 'San Luis Potosí' | 'Tijuana' | 'Global',
  asignature: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  startsAt: string;
  endsAt: string;
  teacher: string;
  classroom: string;
  group: string;
  students: Studets[];
  studentsCount: number;
}

interface ScheduleProps {
  data: Data;
}

export const Schedule: React.FC<ScheduleProps> = ({ data }) => {
  const [modal, setModal] = useState(false)

  let styles = {

  }

  switch (data.campus) {
    case 'Guadalajara':
      styles = {
        borderColor: 'rgb(225 29 72)',
        backgroundColor: 'rgba(255, 241, 242, 0.5)'
      }
      break
    case 'Tijuana':
      styles = {
        borderColor: 'rgb(132 204 22)',
        backgroundColor: 'rgba(247, 254, 231, 0.5)'
      }
      break

    case 'San Luis Potosí':
      styles = {
        borderColor: 'rgb(139 92 246)',
        backgroundColor: 'rgba(245, 243, 255, 0.5)'
      }
      break

    default:
      styles = {
        borderColor: 'rgb(244 114 182)',
        backgroundColor: 'rgba(253, 242, 248, 0.5)'
      }
      break
  }

  return (
    <div>
      <Modal toggle={modal} width='600px' onDimiss={() => setModal(false)} title='Información de la clase'>

        <p><b>ID: </b>{data.id}</p>
        <p><b>Profesor: </b>{data.teacher}</p>
        <p><b>Grupo: </b>{data.group}</p>
        <p><b>Día y hora: </b>{data.day} de {data.startsAt} a {data.endsAt}</p>
        <p><b>Salón: </b>{data.classroom}</p>
        <p><b>Cantidad de alumnos: </b>{data.studentsCount}</p>
        <p className='text-lg font-medium mt-4'>Estudiantes</p>
        <hr className='my-2' />
        <div className=''>
        </div>
          {
            data.students.map((student: any) => <div className='flex space-x-4 py-1'>

              <ProfileImage image={student.photo} size='50px' />

              <div className='self-center flex space-x-4'>
                <p className='self-center'>
                  {student.name}
                </p>
                <p className='text-gray-500 self-center'>
                  {student.matricula}
                </p>
              </div>
            </div>)
          }
        <div className='flex justify-end'>
          <Button label="Cerrar" onClick={() => setModal(false)} />
        </div>
      </Modal>
      <div style={styles} onClick={() => setModal(true)} className='w-full pb-4 cursor-pointer z-depth-1 border-t-4 rounded'>
        <p className='text-sm pl-3 pt-2.5 text-gray-500'>
          {
            data.startsAt + ' - ' + data.endsAt
          }
        </p>
        <div className='flex px-4 py-1.5 space-x-2'>
          <MdOutlineSchool className='self-center text-2xl' />
          <p className='text-lg font-medium'>
            {
              data.asignature
            }
          </p>
        </div>
        <div className='flex px-4 pl-5 py-1.5 space-x-2'>
          <MdOutlineGroups className='self-center text-xl' />
          <p className='text-base'>
            {
              data.group
            }
          </p>
        </div>
      </div>
    </div>
  )
}
