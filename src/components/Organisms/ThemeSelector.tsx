import React, { useEffect, useState, useRef } from 'react'

import { DEFAULT_THEME, CURRENT_THEME } from '../../themes/'
import { applyTheme } from '../../themes/utils'
import { ColorPalette } from '../Molecules/ColorPalette'
import { Button } from '../Atoms/Inputs/Button'

/* Icons */
import { MdExpandLess, MdOutlineModeEditOutline, MdDeleteOutline, MdClear, MdOutlineDone } from 'react-icons/md'

interface ThemeSelectorProps 
{
  themeMenu?: boolean;
  setThemeMenu?: (action: boolean) => void;
}

interface ThemeRadioButtonProps
{
  themeName: string;
  colors: string[];
}

interface CustomThemeRadioButtonProps 
{
  theme: any;
  themeName: string;
  colors: string[];
  toggleCustomThemeMenu: () => void;
  onClick: () => void;
  index: number;
  selected: boolean;
  id: number;
  setCustomizedThemes: (themes: any) => void;
}

const ThemeRadioButton = (props: ThemeRadioButtonProps) => 
{
  const radioInputRef = useRef<any>()
  const [defaultTheme, setDefaultTheme] = useState(DEFAULT_THEME)

  const onClickHandler = () => 
  {
    const newTheme = props.themeName.toLowerCase()
    applyTheme(newTheme)
    radioInputRef.current.click()
    radioInputRef.current.checked = true
    setDefaultTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    const customThemes = JSON.parse(localStorage.getItem('themes') ?? '[]').map((theme: any) => { return { ...theme, selected: false } })
    localStorage.setItem('themes', JSON.stringify(customThemes))
  }

  useEffect(() => 
  {
    try 
    {
      if (localStorage.getItem('themes') && JSON.parse(localStorage.getItem('themes') ?? '')?.filter((item: any) => item.selected === true).length > 0) return
    } 
    catch (error) 
    {
      return
    }
    setDefaultTheme(localStorage?.getItem('theme') ?? defaultTheme)
    if (localStorage?.getItem('theme') === props.themeName.toLowerCase()) radioInputRef.current.click()
    if (!localStorage?.getItem('theme') && props.themeName.toLowerCase() === 'base') radioInputRef.current.click()
  }, [defaultTheme, props.themeName])

  return <div onClick={() => onClickHandler()} className='my-2 mx-3 py-2 px-3 flex space-x-2 border rounded-lg border-primary-text/30 cursor-pointer hover:bg-primary-text/[6%]'>
    <div className='-mt-1'>
      <input ref={radioInputRef} name='1231' type="radio" className='filled-in self-center' />
      <span className='self-center'>
        <div className='grid self-center grid-cols-2 border border-primary-text/10 gap-0 rounded overflow-hidden w-[26px]'>
          <div style={{ backgroundColor: props.colors[0] }} className='w-[12px] h-[12px]'/>
          <div style={{ backgroundColor: props.colors[1] }}className='w-[12px] h-[12px]' />
          <div style={{ backgroundColor: props.colors[2] }} className='w-[12px] h-[12px]' />
          <div style={{ backgroundColor: props.colors[3] }} className='w-[12px] h-[12px]' />
        </div>
      </span>
    </div>
    <label className='self-center cursor-pointer text-primary-text'>{props.themeName}</label>
  </div>
}

const CustomThemeRadioButton = (props: CustomThemeRadioButtonProps) => 
{
  const { index, theme, selected, setCustomizedThemes, themeName, colors, toggleCustomThemeMenu, onClick } = props

  const radioInputRef = useRef<any>()
  const [defaultTheme] = useState(DEFAULT_THEME)
  const [hover, setHover] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const onClickHandler = () => 
  {
    applyTheme({ ...theme })
    radioInputRef.current.click()
    radioInputRef.current.checked = true
    const customThemes = JSON.parse(localStorage.getItem('themes') ?? '[]').map((theme: any) => { return { ...theme, selected: false } })
    customThemes[index].selected = true
    localStorage.setItem('themes', JSON.stringify(customThemes))
  }

  const deleteTheme = () =>
  {
    const customThemes = JSON.parse(localStorage.getItem('themes') ?? '[]').filter((theme: any, i: number) => i !== index)
    setCustomizedThemes(customThemes)
    localStorage.setItem('themes', JSON.stringify(customThemes))
    applyTheme(localStorage.getItem('theme') ?? 'base')
  }

  useEffect(() => 
  {
    if (theme.selected) 
    {
      applyTheme({ ...theme })
    }
  }, [defaultTheme, themeName, theme])

  return <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='relative justify-between overflow-hidden text-primary-text my-2 mx-3 flex space-x-2 border rounded-lg border-primary-text/30 cursor-pointer ' key={index}>
    <div onClick={() => onClickHandler()} className='w-full hover:bg-primary-text/[6%] -mr-2 px-1 py-2 flex space-x-2'>
      <input ref={radioInputRef} defaultChecked={selected} name='1231' type="radio" className='filled-in self-center' />
      <span className='self-center'>
        <div className='grid self-center grid-cols-2 border border-primary-text/10 gap-0 rounded overflow-hidden w-[26px]'>
          <div style={{ backgroundColor: colors[0] }} className='w-[12px] h-[12px]'/>
          <div style={{ backgroundColor: colors[1] }} className='w-[12px] h-[12px]' />
          <div style={{ backgroundColor: colors[2] }} className='w-[12px] h-[12px]' />
          <div style={{ backgroundColor: colors[3] }} className='w-[12px] h-[12px]' />
        </div>
      </span>
      <p className='self-center'>{`Tema personalizado ${index + 1}`}</p>
    </div>
    <div style={{ transform: hover && !confirmDelete ? '' : 'translateX(120px)' }} className='transition duration-200 ease-out flex self-center absolute right-0 z-20'>
      <div onClick={() => { toggleCustomThemeMenu(); onClick() }} className='p-2.5 self-center bg-primary-text/10 hover:bg-primary-text/30'>
        <MdOutlineModeEditOutline className='relative text-2xl z-20 fill-primary-text cursor-pointer' />
      </div>
      <div onClick={() => { setConfirmDelete(true) }} className='p-2.5 self-center bg-primary-text/10 hover:bg-primary-text/30'>
        <MdDeleteOutline className='relative text-2xl z-20 fill-primary-text cursor-pointer' />
      </div>
    </div>
    {
      confirmDelete &&
      <div id='themes' className='bg-primary flex justify-between px-2 h-full w-full self-center top-0 left-0 absolute'>
        <p className='self-center'>
          ¿Eliminar Tema?
        </p>
        <div className='flex self-center'>
          <div onClick={() => deleteTheme()} className='p-2.5 self-center bg-primary-text/10 hover:bg-primary-text/30'>
            <MdOutlineDone className='relative text-2xl z-20 fill-primary-text cursor-pointer' />
          </div>
          <div onClick={() => setConfirmDelete(false)} className='p-2.5 self-center bg-primary-text/10 hover:bg-primary-text/30'>
            <MdClear className='relative text-2xl z-20 fill-primary-text cursor-pointer' />
          </div>
        </div>
      </div>
    }
  </div>
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = (props) => 
{
  const { themeMenu, setThemeMenu } = props
  const [toggleCustomTheme, setToggleCustomTheme] = useState(false)
  const [inputColorPalette, setInputColorPalette] = useState<any>(CURRENT_THEME)
  const [customizedThemes, setCustomizedThemes] = useState([])
  const [editMode, setEditMode] = useState({ mode: false, editId: 0 })
  const [openWindows, addOpenWindow] = useState<any>([])

  const createTheme = () => {
    setToggleCustomTheme(false)
    applyTheme({ ...inputColorPalette })
    let customThemes: any
    try 
    {
      customThemes = JSON.parse(localStorage.getItem('themes') ?? '[]')
    } 
    catch (error) 
    {
      localStorage.setItem('themes', '[]')
      customThemes = []
    }

    if (editMode.mode) 
    {
      customThemes[editMode.editId] = { ...inputColorPalette }
      localStorage.setItem('themes', JSON.stringify(customThemes))
      setEditMode({ mode: false, editId: 0 })
      setCustomizedThemes(customThemes)
      return
    }

    customThemes = [...customizedThemes, { ...inputColorPalette, id: 0, selected: true }]
    localStorage.setItem('themes', JSON.stringify(customThemes))
    setCustomizedThemes(customThemes)
  }

  const toggleCustomThemeMenu = (index: number | null = null) => 
  {
    setInputColorPalette(index !== null ? customizedThemes[index] : CURRENT_THEME)
    setToggleCustomTheme(true)
    addOpenWindow([...openWindows, (action: boolean) => setToggleCustomTheme(action)])
  }

  useEffect(() => 
  {
    document.addEventListener('click', (ev: any) => {
      if (ev?.target?.closest('#themes') || ev?.target?.id === 'themesButton') return
      setThemeMenu && setThemeMenu(false)
    })
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && openWindows.length > 0) {
        console.log(openWindows)
        openWindows[openWindows.length - 1](false)
      }
      /* if (ev.key === 'Escape' && openWindows.length === 0) {
        setThemeMenu(false)
      } */
    })
    try 
    {
      setCustomizedThemes(JSON.parse(localStorage.getItem('themes') ?? '[]'))
    } 
    catch (error) 
    {
      localStorage.setItem('themes', '[]')
      setCustomizedThemes([])
    }
  }, [setCustomizedThemes, setThemeMenu, openWindows])

  return (
    <div id='themes' style={{ display: themeMenu ? 'block' : 'none' }} className='py-2 scale-75 sm:scale-100 overflow-hidden flex poppins border border-primary-text/10 bg-primary shadow rounded absolute -top-[15px] -left-[155px] sm:top-[48px] sm:-left-[200px] h-[480px] w-[400px]'>
      <div style={{ transform: toggleCustomTheme ? 'translateX(-800px)' : 'translateX(0px)' }} className='z-10 transition ease-out duration-500 w-[1400px] flex absolute'>
        <div className='w-[400px]'>
          <p className='text-complementary px-4 pb-2 mb-3 border-b border-primary-text/10'>Select a theme</p>
          <ThemeRadioButton themeName='Light' colors={['#E5E7EB', '#212A3D', '#F59E0B', '#FFFFFF']}/>
          <ThemeRadioButton themeName='Dark' colors={['#111827', '#1F2937', '#544B41', '#F6901B']}/>
          <ThemeRadioButton themeName='Pastel' colors={['#F9E3FC', '#9D43E4', '#E600B3', '#E8F4FF']}/>
          <ThemeRadioButton themeName='Navy' colors={['#72A1AD', '#D8E3D8', '#2C3639', '#00A4C1']}/>
          {
            customizedThemes.map((theme: any, index: number) => <CustomThemeRadioButton setCustomizedThemes={setCustomizedThemes} onClick={() => setEditMode({ mode: true, editId: index })} selected={theme.selected} id={theme.id} theme={theme} toggleCustomThemeMenu={() => toggleCustomThemeMenu(index)} index={index} themeName='Navy' colors={[theme?.background, theme?.primaryText, theme?.complementary, theme?.secondary]} key={index}/>)
          }
          {
            customizedThemes.length < 3 &&
            <div onClick={() => toggleCustomThemeMenu()} className='justify-between text-primary-text my-2 mx-3 py-2 px-3 flex space-x-2 border rounded-lg border-primary-text/30 cursor-pointer hover:bg-primary-text/[6%]'>
              <p>{'Crea un tema'}</p>
              <MdExpandLess className='self-center text-2xl rotate-90' />
            </div>
          }
          <div className='flex justify-end p-4'>
            <Button label="Apply" onClick={() => setThemeMenu && setThemeMenu(false)}/>
          </div>
        </div>
        <div className='w-[400px]'></div>
        <div className='w-[400px] relative'>
          <div className='text-complementary pr-4 pb-2 mb-3 border-b border-primary-text/10'>
            <div onClick={() => { setToggleCustomTheme(false); setEditMode({ mode: false, editId: 0 }) }} className='inline-flex hover:text-primary-text text-primary-text/80 cursor-pointer'>
              <MdExpandLess className='self-center text-2xl -rotate-90' />
              <p className='text-xs self-center pr-4'>Atrás</p>
            </div>
            <p className='px-4 -mt-2'>Personaliza tu tema</p>
          </div>
          <div className='flex justify-center'>
            <ColorPalette {...inputColorPalette} />
          </div>
          <div className='px-2 text-primary-text pt-3 grid gap-2 grid-cols-2 text-xs'>
            <div id='123' onClick={(ev: any) => {}/* ev.target.closest('#123').child.focus() */} className='flex py-1 px-2 border border-primary-text/20 rounded-lg space-x-1'>
              <input type="color" onChange={(ev) => setInputColorPalette({ ...inputColorPalette, secondary: ev.target.value })} value={inputColorPalette.secondary} className='self-center z-depth-2 cursor-pointer' />
              <label className='self-center'>
                Color primario
              </label>
            </div>
            <div className='flex py-1 px-2 border border-primary-text/20 rounded-lg space-x-1'>
              <input type="color" onChange={(ev) => setInputColorPalette({ ...inputColorPalette, primary: ev.target.value })} value={inputColorPalette.primary} className='self-center z-depth-2 cursor-pointer' />
              <label className='self-center' htmlFor="">
                Color secundario
              </label>
            </div>
            <div className='flex py-1 px-2 border border-primary-text/20 rounded-lg space-x-1'>
              <input type="color" onChange={(ev) => setInputColorPalette({ ...inputColorPalette, background: ev.target.value })} value={inputColorPalette.background} className='self-center z-depth-2 cursor-pointer' />
              <label className='self-center' htmlFor="">
                Color de fonto
              </label>
            </div>
            <div className='flex py-1 px-2 border border-primary-text/20 rounded-lg space-x-1'>
              <input type="color" onChange={(ev) => setInputColorPalette({ ...inputColorPalette, primaryText: ev.target.value })} value={inputColorPalette.primaryText} className='self-center z-depth-2 cursor-pointer' />
              <label className='self-center' htmlFor="">
                Texto primario
              </label>
            </div>
            <div className='flex py-1 px-2 border border-primary-text/20 rounded-lg space-x-1'>
              <input type="color" onChange={(ev) => setInputColorPalette({ ...inputColorPalette, secondaryText: ev.target.value })} value={inputColorPalette.secondaryText} className='self-center z-depth-2 cursor-pointer' />
              <label className='self-center' htmlFor="">
                Texto secundario
              </label>
            </div>
            <div className='flex py-1 px-2 border border-primary-text/20 rounded-lg space-x-1'>
              <input type="color" onChange={(ev) => setInputColorPalette({ ...inputColorPalette, complementary: ev.target.value })} value={inputColorPalette.complementary} className='self-center z-depth-2 cursor-pointer' />
              <label className='self-center' htmlFor="">
                Color complementario
              </label>
            </div>
          </div>
          <div className='flex justify-end p-4'>
            <Button label={!editMode.mode ? 'CREAR' : 'Editar'} onClick={() => createTheme()} />
          </div>

        </div>
      </div>
    </div>
  )
}
