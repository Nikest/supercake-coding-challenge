"use client";

import { Box, Title } from '@/components';
import { SearchForm, ISearchData } from '@/modules';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const Customers = () => {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const handleSearch = (data: ISearchData) => {
    const params = new URLSearchParams(sp);

    if (data.search?.trim()) params.set("searchText", data.search.trim());
    else params.delete("searchText");

    if (data.animal?.length) params.set("species", data.animal.join(","));
    else params.delete("species");

    const qs = params.toString();
    router.replace(qs ? `customers?${qs}` : pathname, { scroll: false });
  }


  return (
    <section className="flex gap-big flex-col">
      <Box>
        <div className="flex flex-col gap-big">
          <Title>Customers and Pets</Title>

          <SearchForm onSearch={handleSearch} />
        </div>
      </Box>
    </section>
  )
}