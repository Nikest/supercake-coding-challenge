import { CustomerInfo } from '@/modules';

export const dynamic = 'force-dynamic';

interface ISearchProps {
    searchText?: string;
    species?: string;
}

const publicUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export default async function Page ({ searchParams }: { searchParams: Promise<ISearchProps> }) {
    const { searchText, species } = await searchParams;

    const params = new URLSearchParams({
        searchText: searchText || '',
        species: species || '',
    });

    const res = await fetch(`${publicUrl}/api/customers?${params.toString()}`, {
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