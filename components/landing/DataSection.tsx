import { chakra, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Category } from '../../utils/GeneralProps';
import { homeData } from '../../utils/mock';
import Card from '../Card';

const DataSection: FC<{
  title: string;
  data: Category[];
  type: 'framework' | 'language';
}> = ({ title, data }) => {
  return (
    <chakra.section id={title} mb={{ base: '40px', md: '100px' }}>
      <Container>
        <Heading as='h2' fontWeight={'700'} fontSize={'15px'}>
          {title}
        </Heading>
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
