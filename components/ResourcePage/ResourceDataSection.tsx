import { SimpleGrid, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Resource, ResourceType } from '../../utils/GeneralProps';
import { resourceListDataMock } from '../../utils/mock';
import ResourceCard from '../Cards/ResourceCard';

const ResourceDataSection: FC<{ data: Resource[]; type: ResourceType }> = ({
  data,
  type,
}) => {
  const { asPath } = useRouter();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='20px'>
      {(data || resourceListDataMock)?.map((resource) => {
        const resourceData = resource.attributes;

        if (type === 'package') {
          const hasQueryParams = asPath.includes('?');
          const urlToUse = hasQueryParams
            ? asPath?.replace('?', `/${resource?.id}?`)
            : `${asPath}/${resource?.id}`;

          return (
            <Link key={resource.id} href={urlToUse} passHref>
              <ChakraLink>
                <ResourceCard
                  title={resourceData.name}
                  description={resourceData.subtitle}
                  tags={resourceData.tags}
                />
              </ChakraLink>
            </Link>
          );
        } else {
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
        }
      })}
    </SimpleGrid>
  );
};

export default ResourceDataSection;
