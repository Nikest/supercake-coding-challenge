"use client";

import { useState, useEffect } from 'react';
import { IconFont, Button } from '@/components';

interface IProps {
  name: string;
  content: React.ReactNode;
  onApply: () => void;
  onReset: () => void;
}

export const Popover: React.FC<IProps> = ({ name, content, onApply, onReset }) => {
  const [isOpened, setIsOpened] = useState<boolean | number>(0);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpened(false);
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const stopClickPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const handleClick = () => {
    setIsOpened((state) => !state);
  }

  const handleApply = () => {
    onApply();
    setIsOpened(false);
  }
  
  return (
    <div onClick={stopClickPropagation} className="relative text-sm ">
      <div
        onClick={handleClick}
        className={
          `flex items-center shadow-light justify-between min-w-[122px] transition-main cursor-pointer hover:bg-greyDark ${isOpened ? 'bg-greyDark' : 'bg-white'} px-standard h-formElement-m border border-greyRegular hover:border-greyRegularDarken rounded-xl`
        }
      >
        <span className="w-full">{name}</span>
        <IconFont name={"arrowDown"} />
      </div>

      <div data-show={isOpened} className="popover-animation border shadow-light-big border-greyRegularDarken absolute bg-white mt-standard left-0 top-full min-w-[334px] rounded-xl">
        <div className="p-standard">{content}</div>

        <div className="p-standard border-t border-greyRegularDarken grid grid-cols-2 gap-standard ">
          <Button onClick={onReset}>Reset</Button>
          <Button onClick={handleApply} isHighlighted={true}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}