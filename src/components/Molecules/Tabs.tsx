import React, { useEffect, useRef, useState, ReactNode } from 'react'
import { MdArrowBackIos } from 'react-icons/md'

interface TabsProps {
    tabs: string[];
    children: ReactNode;
    color: string;
    selected: number;
}

export const Tabs = ({ tabs, children, color, selected }: TabsProps) => {
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const childrenRef = useRef<HTMLDivElement | null>(null)

  const [arrows, showArrows] = useState(false)
  const [scroll, changeScroll] = useState(0)

  useEffect(() => {
    const sections = document.getElementsByTagName('section')
    for (const section of sections) {
      section.classList.add('hidden')
    }
    if (sections[selected]) {
      sections[selected].classList.remove('hidden')
    }

    if (tabsRef.current && childrenRef.current) {
      const tabsWidth = tabsRef.current.children[0] ? (tabsRef.current.children[0] as HTMLDivElement).offsetWidth : 0
      if (tabsWidth > childrenRef.current.offsetWidth) {
        showArrows(true)
      } else {
        showArrows(false)
      }
    }
  }, [selected])

  const activeTab = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const tabs = tabsRef.current?.querySelectorAll('#tab') || []
    tabs.forEach(tab => (tab as HTMLDivElement).classList.remove('active-tab'))
    const clickedTab = event.currentTarget;
    clickedTab.classList.add('active-tab')
    const sections = childrenRef.current?.getElementsByTagName('section') || []
    Array.from(sections).forEach(section => section.classList.add('hidden'))
    sections[index]?.classList.remove('hidden')
  }

  const scrollLeft = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollLeft -= tabsRef.current.offsetWidth
      changeScroll(tabsRef.current.scrollLeft)
    }
  }

  const scrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollLeft += tabsRef.current.offsetWidth
      changeScroll(tabsRef.current.scrollLeft)
    }
  }

  return (
    <div className='relative'>
      {arrows && scroll !== 0 &&
        <div onClick={scrollLeft} className='overflow-hidden absolute h-10 pl-1 -mr-1 flex inset-y-0 left-0 z-20 opacity-25 hover:opacity-75 cursor-pointer'>
          <MdArrowBackIos className='text-2xl self-center'/>
        </div>
      }
      {arrows && tabsRef.current && scroll < (tabsRef.current.children[0] as HTMLDivElement).offsetWidth - tabsRef.current.offsetWidth &&
        <div onClick={scrollRight} className='overflow-hidden absolute h-10 pr-1 -ml-1 flex inset-y-0 right-0 z-20 opacity-25 hover:opacity-75 cursor-pointer'>
          <MdArrowBackIos className='text-2xl rotate-180 self-center'/>
        </div>
      }
      <nav className='overflow-hidden transition-[all] ease-out duration-100' ref={tabsRef}>
        <div className='flex w-max'>
          {tabs.map((tab, index) =>
            <div
              id='tab'
              onClick={(event) => activeTab(event, index)}
              className={`${index === selected ? 'active-tab' : ''} tab`}
              key={index}
            >
              {tab}
            </div>
          )}
        </div>
      </nav>
      <div ref={childrenRef} className='w-fill z-10 relative p-6 bg-white shadow-md rounded-b-md'>
        {children}
      </div>
    </div>
  )
}
