import React, { useState, useRef, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

interface CarouselProps {
  children: React.ReactNode[]; 
  height: string;
  width: string;
  timer?: number;
  dotColor: string;
  bgColor: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children, width="75vw", height="30vw", timer, dotColor="#374151", bgColor="#e5e7eb"}) => 
{
  const [countPages, setCount] = useState<number>(children.length);
  const [currentPage, setPage] = useState<number>(1);
  const [carouselWidth, setWidth] = useState<number>(1);
  const [interval, setTimer] = useState<any>(timer ? () => {
    let i = 1;
    return setInterval(() => {
      if (i === countPages) {
        setPage(1);
        i = 1;
      } else {
        setPage(i + 1);
        i = i + 1;
      }
    }, timer);
  } : null);

  const contentRef = useRef<HTMLDivElement>(null);

  const moveForward = () => {
    currentPage === countPages
      ? setPage(1)
      : setPage(currentPage + 1);
    resetInterval(currentPage);
  };

  const moveBackward = () => {
    currentPage === 1
      ? setPage(countPages)
      : setPage(currentPage - 1);
    resetInterval(currentPage - 1);
  };

  const jumpToPage = (page: number) => {
    setPage(page);
    resetInterval(page);
  };

  const resetInterval = (actualpage: number) => {
    if (interval) clearInterval(interval);
    timer && setTimer(
      () => {
        let i = actualpage;
        return setInterval(() => {
          if (i >= countPages) {
            setPage(1);
            i = 1;
          } else {
            setPage(i + 1);
            i = i + 1;
          }
        }, timer);
      }
    );
  };

  useEffect(() => {
    if (contentRef.current) {
      const childrenContent = contentRef.current.querySelectorAll('section');
      for (let child of childrenContent) {
        (child as HTMLElement).style.width = width;
        (child as HTMLElement).style.height = height;
        setWidth((child as HTMLElement).offsetWidth);
      }
      setCount(childrenContent.length);
    }
  }, [height, width, children]);

  const renderDots = (currentPage: number, dotColor: string) => {
    let dots: React.ReactNode[] = [];
    let styles;
    for (let i = 1; i <= countPages; i++) {
      if (currentPage === i) {
        styles = {
          backgroundColor: dotColor,
        };
      } else {
        styles = {
          backgroundColor: 'rgb(168 162 158)',
        };
      }
      dots.push(
        <div
          key={i} 
          style={styles}
          onClick={() => jumpToPage(i)}
          className='text-center ease-out duration-100 rounded-full h-3 w-3 hover:bg-white hover:opacity-100 cursor-pointer'
        />
      );
    }
    return dots;
  };

  return (
    <div className='overflow-hidden rounded bg-gray-300/25 relative' style={{ height, width: width }}>
      <div ref={contentRef} style={{ transform: `translateX(-${carouselWidth * (currentPage - 1)}px)`, backgroundColor: bgColor }} className='transition ease-out duration-500 flex absolute flex-nowrap'>
        {children}
      </div>
      <div style={{ width }} className='absolute bottom-4 flex justify-center space-x-3'>
        {renderDots(currentPage, dotColor)}
      </div>
      <div className='text-3xl text-gray-400'>
        <MdArrowForwardIos onClick={() => moveBackward()} className='ml-4 absolute cursor-pointer h-full hover:text-gray-500 inset-y-0 left-0 rotate-180' />
        <MdArrowForwardIos onClick={() => moveForward()} className='mr-4 absolute cursor-pointer h-full hover:text-gray-500 inset-y-0 right-0' />
      </div>
    </div>
  );
};
