import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const NavLink: FC<{
  title: string;
  href: string;
}> = ({ title, href }) => {
  const router = useRouter();
  const isActive = router.asPath.includes(href);

  return (
    <Link href={href} passHref>
      <ChakraLink
        fontSize='sm'
        fontWeight={isActive ? 700 : 600}
        color='#1E2128'
        _hover={{
          fontWeight: 700,
        }}
      >
        {title}
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
