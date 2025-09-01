"use client";

import { useState, useEffect, useRef } from 'react';
import { SearchInput, SelectButtons } from '@/components';
import { Popover } from '@/modules';
import { animalsOptions } from '@/configs';

export interface ISearchData {
  search: string;
  animal: string[];
}

interface IProps {
  onSearch: (data: ISearchData) => void;
}

export const SearchForm: React.FC<IProps> = ({ onSearch }) => {
  const isFirstRender = useRef<boolean>(true);
  const [hashState, setHashState] = useState(0);
  const [animalsArray, setAnimalsArray] = useState<string[]>([]);

  const [searchData, setSearchData] = useState<ISearchData>({
    search: '',
    animal: [],
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    onSearch(searchData);
  }, [searchData]);

  const handleSearchChange = (search: string) => {
    setSearchData((state) => ({...state, search }));
  }

  const handleAnimalChange = (animals: string[]) => {
    setAnimalsArray(animals)
  }

  const handleReset = () => {
    setHashState(Math.random());
    setSearchData((state) => ({...state, animal: [], search: '' }));
  }

  const handleSearch = () => {
    setSearchData((state) => ({...state, animal: animalsArray }));
  }
  
  return (
    <section className="flex gap-big">
      <SearchInput
        className="w-[312px]"
        name={'search'}
        onChange={handleSearchChange}
        placeholder="Search by ID, name, email or phone"
      />

      <Popover
        key={hashState}
        name={'Pets'}
        content={<SelectButtons name="animal" defaultValue="any" options={animalsOptions} onSelected={handleAnimalChange} />}
        onReset={handleReset}
        onApply={handleSearch}
      />
    </section>
  )
}