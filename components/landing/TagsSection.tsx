import { Badge, Skeleton, Wrap, WrapItem } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { TagInner } from '../../utils/GeneralProps';

const TagsSection: FC<{
  data: TagInner[];
}> = ({ data }) => {
  return (
    <Wrap spacingX='12px' spacingY={'7px'}>
      {data?.map((t) => {
        return (
          <WrapItem key={t.id}>
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
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default TagsSection;
