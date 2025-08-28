"use client";

import { useState } from "react";
import { Box, Title, Suspense, ErrorDisplay } from '@/components';
import { SearchForm, ISearchData, CustomerInfo } from '@/modules';
import { searchCustomer } from '@/actions';
import { Customer } from '@/app/api/customers/route';

export const Customers = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);

  const handleSearch = (data: ISearchData) => {
    setIsLoading(true);

    searchCustomer(data).then((customers) => {
      setCustomers(customers);
      setIsLoading(false);
      setHasError(false);
    }).catch((e) => {
      setHasError(e);
      setIsLoading(false);
      setCustomers([] as Customer[]);
    });
  }

  if (hasError) {
    console.error('Error occurred', hasError);
  }

  return (
    <section className="flex gap-big flex-col">
      <Box>
        <div className="flex flex-col gap-big">
          <Title>Customers and Pets</Title>
          <SearchForm onSearch={handleSearch} />
        </div>
      </Box>

      {
        !isLoading && hasError && (
          <ErrorDisplay />
        )
      }

      {
        isLoading && (
          <Suspense />
        )
      }

      {
        !isLoading && customers.map((customer) => (
          <CustomerInfo key={customer.id} customer={customer} />
        ))
      }
    </section>
  )
}