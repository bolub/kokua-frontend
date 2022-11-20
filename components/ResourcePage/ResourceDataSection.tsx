import { SimpleGrid, Link as ChakraLink } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Resources, ResourceType } from '../../utils/GeneralProps';
import { resourceListDataMock } from '../../utils/mock';
import ResourceCard from '../Cards/ResourceCard';

const ResourceDataSection: FC<{ data: Resources[]; type: ResourceType }> = ({
  data,
  type,
}) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='20px'>
      {(data || resourceListDataMock)?.map((resource) => {
        const resourceData = resource.attributes;

        // if (type === 'package') {
        //   return (
        //     <Link key={resource.id} href=''>
        //       <ResourceCard
        //         title={resourceData.name}
        //         description={resourceData.subtitle}
        //         tags={resourceData.tags}
        //       />
        //     </Link>
        //   );
        // } else {
        return (
          <ChakraLink
            key={resource.id}
            href={resourceData.external_url}
            isExternal
          >
            <ResourceCard
              title={resourceData.name}
              description={resourceData.subtitle}
              tags={resourceData.tags}
            />
          </ChakraLink>
        );
        // }
      })}
    </SimpleGrid>
  );
};

export default ResourceDataSection;
