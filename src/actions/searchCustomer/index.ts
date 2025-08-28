import { ISearchData } from '@/modules';
import { Customer } from '@/app/api/customers/route';

export const searchCustomer = (data: ISearchData): Promise<Customer[]> => {
  const params = new URLSearchParams({
    searchText: data.search,
    species: data.animal.join(','),
  });

  return fetch(`/api/customers?${params.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json()).then((res) => res.customers);
}