import React, { useEffect, useRef } from 'react'

interface Link {
  label: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

interface DualTabProps {
  links: Link[];
  select?: number;
}

const Tab = ( {button, style, onClick}: any) => {
    return <div id='tab' onClick={(ev) => onClick(ev)} style={style} className={`cursor-pointer bg-stone-200 hover:bg-stone-300 py-2 px-6`}>
        {button.label}
    </div>
}

export const SwitchButton = ( {links, select}: DualTabProps) => {

  const tabsRef = useRef<any>(true)

  useEffect(() => {
    if(typeof select !== 'undefined' && (select <= links.length - 1 && select >= 0)) {
      const tabs = tabsRef?.current?.querySelectorAll("#tab");
      console.log(tabs[select]);
      tabs[select].classList.add('bg-blue-500');
      tabs[select].classList.add('text-white');
      tabs[select].classList.remove('hover:bg-stone-300');
    }
  }, [links.length, select])

  const activeTab = (event: any, index: number) => {
    const tabs = tabsRef.current.querySelectorAll("#tab");
    for (const tab of tabs) {
      tab.classList.remove('bg-blue-500')
      tab.classList.remove('text-white');
      tab.classList.add('bg-stone-200')
      tab.classList.add('hover:bg-stone-300');
    }
    event.target.closest('#tab').classList.add('bg-blue-500');
    event.target.closest('#tab').classList.add('text-white');
    event.target.closest('#tab').classList.remove('hover:bg-stone-300');
  }

  return (
    <div ref={tabsRef} className='flex'>
      {
        links.map((link: Link, index: number) => 
          {
            let style
            if(index === 0){
              style = {
                borderTopLeftRadius:  '2rem',
                borderBottomLeftRadius: '2rem'
              }
            }
            if(index === links.length - 1) {
              style = {
                borderTopRightRadius:  '2rem',
                borderBottomRightRadius: '2rem'
              }
            }
            return <Tab onClick={(ev: React.MouseEvent<HTMLButtonElement>) => { activeTab(ev, index); link?.onClick && link.onClick(ev) }} style={style} button={link} />
          }
        )
      }
    </div>
  )
}
