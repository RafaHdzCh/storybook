import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { MdOutlineArrowForward, MdCheck, MdAddTask, MdTaskAlt, MdOutlineArrowBack, MdOutlineModeEditOutline } from "react-icons/md";
import { Modal } from '../Molecules/Modal';
import { TextInput } from '../../components/Atoms/Inputs/TextInput'
import { Textarea } from '../Atoms/Inputs/Textarea';
import { Button } from '../Atoms/Inputs/Button';
import { SweetAlert } from '../Molecules/SweetAlert'
import { useCookies } from 'react-cookie';

interface CalendarProps {
  onChange?: (task: TaskInterface) => void
}

interface DayProps {
  date: any;
  month: any;
  onChange?: (task: TaskInterface) => void
}

interface TaskInterface {
  id: number;
  title: string;
  description: string;
  date: any;
}

const TaskCard: React.FC<TaskInterface | any> = ({ onChange, id, title, description, date, tasks, setTask, index}) => {
  const [taskOptions, showOptions] = useState<boolean>(false)
  const [editTitleIcon, showEditTitleIcon] = useState<boolean>(false)
  const [editDescriptionIcon, showEditDescriptionIcon] = useState<boolean>(false)
  const [editTile, setEditTile] = useState<boolean>()
  const [editDescription, setEditDescription] = useState<boolean>()
  const [alert, showAlert] = useState<boolean>(false)
  const [cookies, setCookie] = useCookies(['tasks']);
  const [titleValue, setTitleValue] = useState<string>()
  const [descriptionValue, setDescriptionValue] = useState<string>()

  const completeTask = () => {
    showAlert(false)
    let task = {
      id,
      title,
      description,
      date
    }
    let filteredTasks = cookies.tasks.filter(task => task.id !== id)
    setCookie('tasks', JSON.stringify([...filteredTasks]), { path: '/' } )
    setTask(tasks.filter(task => task.id !== id))
    onChange(task)
  }

  const editTaskTileHandler = () => {
    let task = {
      id,
      title: titleValue,
      description,
      date
    }
    let filteredTasks = cookies.tasks.filter(task => task.id !== id)
    setCookie('tasks', JSON.stringify([task, ...filteredTasks]), { path: '/' } )
    setEditTile(false)
    onChange(task)
  }

  const editTaskDescriptionHandler = () => {
    let task = {
      id,
      title,
      description: descriptionValue,
      date
    }
    let filteredTasks = cookies.tasks.filter(task => task.id !== id)
    setCookie('tasks', JSON.stringify([task, ...filteredTasks]), { path: '/' } )
    setEditDescription(false)
    onChange(task)
  }

  useEffect(() => {
    setTitleValue(title)
    setDescriptionValue(description)
  }, [title])

  return <div className='py-3' onMouseEnter={() => showOptions(true)} onMouseLeave={() => showOptions(false)}>
    <SweetAlert type='success' show={alert} label='Complete task?' text='It will remove the task from the task list' onCancel={() => showAlert(false)} onConfirm={() => completeTask()} />
    <div className='z-depth-1 relative rounded-lg p-4'>
      {
        editTile
        ? <div className='w-full flex space-x-2 max-h-min relative mb-1'>
          <form className='w-full' onSubmit={(ev) => {ev.preventDefault(); editTaskTileHandler()}}>
            <input autoFocus onChange={(ev) => setTitleValue(ev.target.value)} type="text" value={titleValue} className='text-lg w-full bg-gray-200 p-0.5 -ml-2 px-2 rounded-lg outline-none focus:outline-none' />
          </form>
          <MdCheck onClick={() => editTaskTileHandler()} className='bg-teal-500 rounded-full z-depth-1 self-center cursor-pointer text-[30px] p-1.5 text-white' /> 
        </div>
        : <p onClick={() => setEditTile(true)} onMouseEnter={() => showEditTitleIcon(true)} onMouseLeave={() => showEditTitleIcon(false)} className='cursor-pointer text-lg mb-1'>
        {titleValue}
          {
            editTitleIcon &&
            <MdOutlineModeEditOutline className='inline ml-2 mb-1'/>
          }
        </p>
      }
      {
        editDescription
        ? <div className='w-full flex space-x-2 max-h-min relative mb-1'>
          <form className='w-full' onSubmit={(ev) => {ev.preventDefault(); editTaskDescriptionHandler()}}>
            <input autoFocus onChange={(ev) => setDescriptionValue(ev.target.value)} type="text" value={descriptionValue} className='text-sm w-full bg-gray-200 p-0.5 -ml-2 px-2 rounded-lg outline-none focus:outline-none' />
          </form>
          <MdCheck onClick={() => editTaskDescriptionHandler()} className='bg-teal-500 rounded-full z-depth-1 self-center cursor-pointer text-[30px] p-1.5 text-white' /> 
        </div>
        : <p onClick={() => setEditDescription(true)} onMouseEnter={() => showEditDescriptionIcon(true)} onMouseLeave={() => showEditDescriptionIcon(false)} className='cursor-pointer text-gray-400 text-sm'>
          {descriptionValue}
          {
            editDescriptionIcon &&
            <MdOutlineModeEditOutline className='inline ml-2 mb-1 absolute text-gray-600 text-lg'/>
          }
        </p>
      }
      
    </div>
    <Button 
      onClick={() => showAlert(true)} 
      size='xs' 
      textHover='rgb(5 150 105)' 
      icon=
      {
        <MdCheck className='self-center text-lg -ml-1' />
      }  
      bgColor='rgb(167 243 208)' 
      bgHover='rgb(110 231 183)' 
      textColor='rgb(5 150 105)'
    >
      Complete task
    </Button>
  </div>
}

const Day:React.FC<DayProps> = ({ date, month, onChange }) => 
{
  const [modal, setModal] = useState<boolean>(false)
  const [newTask, setNewTask] = useState<boolean>(false)
  const [tasksList, setTask] = useState<Array<TaskInterface>>([])
  const [taskTitle, setTaskTitle] = useState<string>('')
  const [taskDescription, setTaskDescription] = useState<string>('')
  const [cookies, setCookie] = useCookies(['tasks']);

  const today = date.format('DD:MM:YY') === moment().format('DD:MM:YY')
  const currentMonth = month === date.format('MMMM')

  const clearFields = () => {
    setTaskTitle('')
    setTaskDescription('')
    setNewTask(false)
  }

  const addTask = () => {
    let taskCookies = cookies?.tasks || []
    let id = taskCookies.length ? Math.max(...taskCookies.map(o => o.id)) + 1 : 0
    let newTask = {
      id,
      title: taskTitle,
      description: taskDescription,
      date
    }
    onChange && onChange(newTask)
    setTask([...tasksList, newTask])
    setCookie('tasks', JSON.stringify([...taskCookies, newTask]), { path: '/' } )
    clearFields()
  }

  useEffect(() => {
    let taskArray: TaskInterface[] = []
    cookies.tasks && cookies.tasks.forEach((task: TaskInterface) => {
      moment(date).format('DD MMMM YYYY') === moment(task.date).format('DD MMMM YYYY') &&
      taskArray.push(task)
    })
    setTask(taskArray)
  }, [date])

  return (
  <div className="relative">
    <Modal 
      bgColor='rgb(6 182 212)'
      textColor='rgb(224 231 255)'
      width='700px' 
      toggle={modal} 
      onDimiss={() => setModal(false)} title={date.format('dddd DD MMMM YYYY')}
    >
      <div className='flex justify-between pb-3'>
        <p className='font-medium self-center text-center text-lg'>Tasks list</p>
        <Button onClick={() => setNewTask(true)} bgColor='rgb(6 182 212)' textColor='rgb(224 231 255)' icon={<MdAddTask className='-ml-1 text-xl self-center'/>}>Add task</Button>
      </div>
      {
        newTask &&
        <div className='card'>
          <TextInput value={taskTitle} onChange={(ev: any) => setTaskTitle(ev.target.value)} placeholder='Task title' />
          <Textarea text={taskDescription} onChange={(ev: any) => setTaskDescription(ev.target.value)} placeholder='Task description' />
          <div className='flex space-x-4 justify-end'>
            <Button onClick={() => clearFields()} bgColor='rgb(244 63 94)' bgHover='rgb(225 29 72)'>Close</Button>
            <Button onClick={() => addTask()} bgColor='rgb(16 185 129)' bgHover='rgb(5 150 105)'>Accept</Button>
          </div>
        </div>
      }
      {
        (!newTask && tasksList.length === 0) &&
        <div className='text-stone-300 pb-4'>
          <div className='flex justify-center'>
            <MdTaskAlt className='text-[100px]'/>
          </div>
          <p className='text-center text-2xl pt-2'>No tasks added yet!</p>
        </div>
      }
      {
        tasksList.sort((a, b) => a.id - b.id).map((task: TaskInterface, i: number) => <TaskCard onChange={onChange && onChange} tasks={tasksList} index={i} setTask={setTask} id={task.id} title={task.title} description={task.description} date={task.date} />)
      }
      <hr className='my-4 border-gray-300'/>
      <div className='flex justify-end'>
        <Button onClick={() => setModal(false)} bgColor='gray' textColor='white'>Cerrar</Button>
      </div>
    </Modal>
      <div onClick={() => setModal(true)}
        className={`text-center h-16 grid relative place-content-center min-h-full hover:bg-gray-100 cursor-pointer
        ${!currentMonth && 'bg-gray-100 text-gray-400 hover:bg-gray-200'}
        ${(today && currentMonth ) && 'bg-amber-400 text-amber-700 hover:bg-amber-500'}
        `}
      >
        <div className='absolute inset-x-0 bg -bottom-2 flex space-x-1 justify-center font-bold m-2'>
        {
          [...Array(tasksList.length)].map(() => <div className='h-[7px] w-[7px] z-depth1-1 mb-2 bg-blue-500 rounded-full' />)
        }
        </div>
        <p className='font-light'>{date.format('D')}</p>
        {
          today &&
          <p className='text-xs pb-2'>Today</p>
        }
        <p className="text-xs text-light">
          {!currentMonth && date.format('MMMM')}
        </p>
      </div>
  </div>
  )
}

export const Calendar: React.FC<CalendarProps> = ({ onChange }) => {

  const [currentDate, setDate] = useState(moment())
  const [selectedDate, selectDate] = useState(moment())
  const [currentMonth, setMonth] = useState(moment().format('MMMM'))

  const dayNames = new Map([
    ['Sunday', 0],
    ['Monday', 1],
    ['Tuesday', 2],
    ['Wednesday', 3],
    ['Thursday', 4],
    ['Friday', 5],
    ['Saturday', 6]
  ])

  let days = [{}]
  for (var i = 0; i < 41; i++) {
    days.push({});
  }

  return (
    <div className='poppins rounded-t-lg border-[1px] border-stone-100'>
      <div className="bg-amber-500 flex justify-between px-4 rounded-t-lg text-center py-0.5 text-white">
        <MdOutlineArrowBack onClick={() => setMonth(currentDate.subtract(1, 'M').format('MMMM'))}
        className='self-center text-2xl transition duration-200 cursor-pointer hover:scale-125' />
          <div className='flex space-x-4'>
            <p className="poppins font-medium text-2xl">{currentDate.format('MMMM').toUpperCase()}</p>
            <p className="poppins font-medium self-center text-2xl">{currentDate.format('YYYY').toUpperCase()}</p>
          </div>
        <MdOutlineArrowForward onClick={() => setMonth(currentDate.add(1, 'M').format('MMMM'))}
        className='self-center text-2xl transition duration-200 cursor-pointer hover:scale-125' />
      </div>
      <div className="grid grid-cols-7 py-4 bg-stone-200 text-center">
        {
          Array.from(dayNames.keys()).map(day => <div className='text-gray-800'>
            {day}
          </div>)
        }
      </div>
      <div className="grid grid-cols-7 place-content-center">
        {
          days.map((day, i) => {
            let date = moment(currentDate.format('YYYY/MMMM')).isoWeekday(i)
            return <Day onChange={onChange && onChange} date={date} month={currentDate.format('MMMM')} key={i} /> 
          })
        }
      </div>
    </div>
  )
}
