import { Badge, Skeleton, Wrap, WrapItem } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { Tag } from '../../utils/GeneralProps';

const TagsSection: FC<{
  data: Tag[];
}> = ({ data }) => {
  return (
    <Wrap mt='20px' spacingX='12px' spacingY={'7px'}>
      {data?.map((t) => (
        <WrapItem key={t.id}>
          <Skeleton isLoaded={Boolean(t.attributes.name)}>
            <Link href={`/resources/${t.attributes.name}`} passHref>
              <Badge
                as='a'
                py={'1'}
                px={'14px'}
                borderRadius={'200px'}
                color={'text.100'}
                borderColor={'border.200'}
                borderWidth={'1px'}
                fontWeight={'600'}
                textTransform={'capitalize'}
                fontSize={'12px'}
                bg='white'
              >
                {t.attributes.name}
              </Badge>
            </Link>
          </Skeleton>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default TagsSection;
