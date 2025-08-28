import { IconFont, Box, Title } from '@/components';
import { Customer } from '@/app/api/customers/route';

interface IProps {
  customer: Customer;
}

export const CustomerInfo: React.FC<IProps> = ({ customer }) => {
  return (
    <Box>
      <div className="flex flex-col gap-standard">
        <Title>{customer.name}</Title>

        <p className="flex gap-standard text-xs">
          <span>{customer.email}</span>
          <span>{customer.phone}</span>
        </p>

        <div className="flex gap-big items-center">
          {
            customer.pets.map((pet, i) => (
              <p key={i} className="flex gap-1 text-xs items-center">
                <IconFont name={pet.species as never} />
                <span>{pet.name}</span>
              </p>
            ))
          }
        </div>
      </div>
    </Box>
  );
}