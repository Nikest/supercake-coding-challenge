"use client";

import { IconFont } from '@/components';
import { debounce } from '@/utils';

interface IProps {
  name: string;
  onChange: (search: string) => void;
  placeholder: string;
  className?: string;
}

export const SearchInput: React.FC<IProps> = ({ name, onChange, placeholder, className = '' }) => {
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, 250);

  return (
    <label
      className={
        `flex cursor-text h-formElement-m transition-main items-center p-standard bg-white gap-standard border border-greyRegular rounded-lg shadow-none hover:border-paletteRegular focus-within:border-paletteRegular focus-within:shadow-focusLight ${className}`
      }
    >
      <IconFont name={"search"} />
      <input
        name={name}
        placeholder={placeholder}
        onInput={handleChange}
        className="w-full outline-none text-sm"
      />
    </label>
  );
}