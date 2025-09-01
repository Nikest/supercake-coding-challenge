import { CustomerInfo } from '@/modules';

export const dynamic = 'force-dynamic';

interface ISearchProps {
    searchText?: string;
    species?: string;
}

export default async function Page ({ searchParams }: { searchParams: Promise<ISearchProps> }) {
    const { searchText, species } = await searchParams;

    const params = new URLSearchParams({
        searchText: searchText || '',
        species: species || '',
    });

    const res = await fetch(`http://localhost:3000//api/customers?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
    });

    const data = await res.json();

    return (
        <>
            {
                data.customers.map((customer: any) => (
                    <CustomerInfo key={customer.id} customer={customer} />
                ))
            }
        </>
    );
}