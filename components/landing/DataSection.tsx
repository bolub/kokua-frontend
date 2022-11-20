import { chakra, Container, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Category } from '../../utils/GeneralProps';
import { homeData } from '../../utils/mock';
import Card from '../Card';

const DataSection: FC<{
  title: string;
  data: Category[];
  type: 'framework' | 'language';
}> = ({ title, data, type }) => {
  return (
    <chakra.section id={title} mb={{ base: '40px', md: '60px' }}>
      <Container py={'60px'}>
        <Text fontWeight={'700'} fontSize={'15px'}>
          {title}
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          gap='19px'
          mt='25px'
        >
          {(data || homeData)?.map((resource) => {
            const resourceData = resource.attributes;

            return (
              <Card
                href={`/resources/${resourceData?.name}`}
                key={resource.id}
                title={resourceData.name}
                logo={resourceData?.logo_url || resourceData?.logourl}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </chakra.section>
  );
};

export default DataSection;
