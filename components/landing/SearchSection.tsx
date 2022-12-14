import {
  Box,
  Button,
  chakra,
  Container,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import { TagInner } from '../../utils/GeneralProps';
import TagsSection from './TagsSection';

const SearchSection: FC<{ data: TagInner[] }> = ({ data }) => {
  const [showTags, setShowTags] = useState(false);
  const [value, setValue] = useState('');
  const router = useRouter();

  return (
    <chakra.section is='search'>
      <Container mb={{ base: '40px', md: '100px' }}>
        <chakra.form
          onSubmit={(e) => {
            e.preventDefault();

            router.push(`/resources/${value}?search=true`);
          }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              // eslint-disable-next-line
              children={<Icon fontSize='20px' as={HiOutlineSearch} />}
            />
            <Input
              type='search'
              placeholder='Search Resource...'
              _placeholder={{
                fontSize: 'sm',
              }}
              fontSize='sm'
              _focus={{
                borderColor: 'brand.500',
              }}
              onFocus={() => {
                setShowTags(true);
              }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              rounded='none'
              borderWidth='1.4px'
              isRequired
            />
          </InputGroup>
        </chakra.form>

        {/* Tags */}
        {showTags && (
          <Box mt='20px'>
            <TagsSection data={data} />
            <Button
              size='xs'
              mt='30px'
              leftIcon={<Icon as={HiOutlineX} />}
              onClick={() => {
                setShowTags(false);
              }}
            >
              Close
            </Button>
          </Box>
        )}
      </Container>
    </chakra.section>
  );
};

export default SearchSection;
