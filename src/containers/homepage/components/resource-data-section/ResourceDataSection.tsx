import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import ResourceCard from "../resource-card/ResourceCard";

import { Header } from "../Header";
import { SearchParams } from "@/app/(website)/page";
import { getResources } from "./api";
import { NextButton } from "../NextButton";
import { getResourceParams } from "../../utils";

const ResourceDataSection: FC<{
  params: SearchParams;
}> = async ({ params }) => {
  const decodedParams = getResourceParams(params);
  const { result: resources, total } = await getResources(decodedParams);

  const label = `${resources?.length} of ${total} resources`;

  return (
    <Box mt="10px">
      <Header query={params.query} tag={params.tag} label={label} />

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="24px">
        {resources?.map((resource) => {
          return <ResourceCard key={resource._id} {...resource} />;
        })}
      </SimpleGrid>

      {/* {!hasFilters && resources.length < total && ( */}
      <NextButton resources={resources} />
      {/* )} */}

      {resources?.length === 0 && (
        <Center h="60vh" maxW="500px" mx="auto" textAlign="center">
          <Text>
            Sorry, we don&apos;t have the resource you&apos;re looking for. But
            we&apos;re always adding new stuff so check back later
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default ResourceDataSection;
