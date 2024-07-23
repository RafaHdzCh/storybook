import React, { useState } from 'react';

interface Link {
  label: string;
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

interface DualTabProps {
  bgColor: string;
  textColor: string;
  bgActiveColor: string;
  textActiveColor: string;
  links: Link[];
  select?: number;
}

const Tab = ({
  button,
  style,
  onClick,
  isActive,
  bgColor,
  bgActiveColor,
  textColor,
  textActiveColor,
}: {
  button: Link;
  style?: React.CSSProperties;
  onClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
  isActive: boolean;
  bgColor: string;
  bgActiveColor: string;
  textColor: string;
  textActiveColor: string;
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        ...style,
        backgroundColor: isActive ? bgActiveColor : bgColor,
        color: isActive ? textActiveColor : textColor,
      }}
      className='cursor-pointer py-2 px-6'
    >
      {button.label}
    </div>
  );
};

export const SwitchButton = ({
  links,
  select = 0,
  bgColor = "#d9f99d",
  textColor = "#65a30d",
  bgActiveColor = "#a5f3fc",
  textActiveColor = "#0891b2",
}: DualTabProps) => {
  const [activeIndex, setActiveIndex] = useState(select);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    setActiveIndex(index);
    const onClickHandler = links[index]?.onClick;
    if (onClickHandler) {
      onClickHandler(event);
    }
  };

  return (
    <div className='flex'>
      {links.map((link: Link, index: number) => {
        let style: React.CSSProperties = {};
        if (index === 0) {
          style = {
            borderTopLeftRadius: '2rem',
            borderBottomLeftRadius: '2rem',
          };
        }
        if (index === links.length - 1) {
          style = {
            ...style,
            borderTopRightRadius: '2rem',
            borderBottomRightRadius: '2rem',
          };
        }
        return (
          <Tab
            key={index}
            onClick={(ev: React.MouseEvent<HTMLDivElement>) => handleClick(ev, index)}
            style={style}
            button={link}
            isActive={index === activeIndex}
            bgColor={bgColor}
            bgActiveColor={bgActiveColor}
            textColor={textColor}
            textActiveColor={textActiveColor}
          />
        );
      })}
    </div>
  );
};
