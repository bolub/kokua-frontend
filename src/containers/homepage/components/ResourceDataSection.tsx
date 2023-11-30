import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import ResourceCard from "./resource-card/ResourceCard";

import { Header } from "./Header";
import { ResourceService } from "../../../../server/modules/resource/impl";
import { SearchParams } from "@/app/page";

const ResourceDataSection: FC<{
  params: SearchParams;
}> = async ({ params }) => {
  const resources = await ResourceService.all({
    name: params.query,
    tag: params.tag,
  });

  return (
    <Box mt="10px">
      <Header
        query={params.query}
        tag={params.tag}
        length={resources?.length}
      />

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="24px">
        {resources?.map((resource) => {
          return <ResourceCard key={resource.id} {...resource} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ResourceDataSection;
