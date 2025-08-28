"use clients";

import { useEffect, useRef } from "react";
import { IconFont } from '@/components';

export interface IOption {
  label: string;
  value: string;
  icon?: string;
}

interface IProps {
  name: string;
  options: IOption[];
  defaultValue: string;
  onSelected: (data: string[]) => void;
}

export const SelectButtons: React.FC<IProps> = ({ name, options, defaultValue, onSelected }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const inputs = useRef<NodeListOf<HTMLInputElement> | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    inputs.current = containerRef.current.querySelectorAll<HTMLInputElement>('input');

    inputs.current.forEach((input) => {
      if (input.value === defaultValue) {
        input.checked = true;
      }
    });
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValues: string[] = [];

    if (e.target.value !== defaultValue) {
      inputs.current?.forEach((input) => {
        if (input.value === defaultValue) {
          input.checked = false;
          return;
        }

        if (input.checked) {
          selectedValues.push(input.value);
        }
      });
      onSelected(selectedValues);
    } else {
      onSelected([]);
      inputs.current?.forEach((input) => {
        if (input.value !== defaultValue) {
          input.checked = false;
        } else {
          input.checked = true;
        }
      });
    }

    if (selectedValues.length === options.length - 1) {
      onSelected([]);
      inputs.current?.forEach((input) => {
        if (input.value === defaultValue) {
          input.checked = true;

        } else {
          input.checked = false;
        }
      });
    }
  }

  return (
    <section ref={containerRef} className="flex flex-wrap gap-small" onChange={handleChange}>
      {
        options.map((option) => (
          <SelectButton key={option.value} name={name} {...option} />
        ))
      }
    </section>
  );
}

interface IPropsButton extends IOption {
  name: string;
  defaultChecked?: boolean;
}

const SelectButton: React.FC<IPropsButton> = ({ name, label, value, icon }) => {
  return (
    <label className="cursor-pointer group has-[input:checked]:bg-paletteRegular group py-small px-4 flex items-center justify-center transition-main gap-small border border-greyRegular hover:border-paletteRegular  has-[input:checked]:border-paletteRegular h-formElement-s rounded-full">
      <input name={name} type="checkbox" value={value} className="hidden peer" />

      { icon && <span className="text-greyText group-hover:text-paletteRegular peer-checked:text-white"><IconFont name={icon as never} /></span> }
      <span className="text-palettePrimary peer-checked:text-paletteUltraLight">{label}</span>
    </label>
  );
}