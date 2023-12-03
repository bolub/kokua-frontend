import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import ResourceCard from "../resource-card/ResourceCard";

import { Header } from "../Header";
import { SearchParams } from "@/app/(website)/page";
import { getData } from "./api";

const ResourceDataSection: FC<{
  params: SearchParams;
}> = async ({ params }) => {
  const resources = await getData({
    search: decodeURIComponent(params.query || "").split("&"),
    tag: decodeURIComponent(params.tag || "").split("&"),
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
          return <ResourceCard key={resource._id} {...resource} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ResourceDataSection;
