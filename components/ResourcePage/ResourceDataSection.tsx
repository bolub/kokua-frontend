import { SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import ResourceCard from "../Cards/ResourceCard";
import { Resource, ResourceType, Tag } from "@prisma/client";

const ResourceDataSection: FC<{ data: Resource[]; type?: ResourceType }> = ({
  data,
  type,
}) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="24px">
      {data?.map((resource) => {
        // @ts-ignore
        const tags = resource?.tags as Tag[];

        // if (type === 'package') {
        //   const hasQueryParams = asPath.includes('?');
        //   const urlToUse = hasQueryParams
        //     ? asPath?.replace('?', `/${resource?.id}?`)
        //     : `${asPath}/${resource?.id}`;

        //   return (
        //     <Link key={resource.id} href={urlToUse} passHref>
        //       <ChakraLink>
        //         <ResourceCard
        //           title={resourceData.name}
        //           description={resourceData.subtitle}
        //           tags={resourceData.tags}
        //           contentType={resourceData.contentType}
        //         />
        //       </ChakraLink>
        //     </Link>
        //   );
        // } else {
        return (
          <ResourceCard
            key={resource.id}
            url={resource.external_url}
            title={resource.name}
            description={resource.subtitle}
            tags={tags}
            contentType={resource?.contentType}
          />
        );
        // }
      })}
    </SimpleGrid>
  );
};

export default ResourceDataSection;
