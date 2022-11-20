import { Center } from '@chakra-ui/react';
import React from 'react';

const TabBadge = ({ value }: { value: number }) => {
  return (
    <Center
      bg='#4A5568'
      color='white'
      h='18px'
      minW='19px'
      ml='10px'
      rounded='full'
      fontWeight={700}
      fontSize='sm'
      className='badge'
    >
      {value}
    </Center>
  );
};

export default TabBadge;
