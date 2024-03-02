"use client";

import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { Resource } from "./resource-data-section/types";
import { Button, Center } from "@chakra-ui/react";
import { PAGE_SIZE } from "../utils";

export const NextButton = ({ resources }: { resources: Resource[] }) => {
  const { setMultipleQueryParams } = useQueryParamsActions();

  const getNextData = () => {
    const totalNumberOfResources = resources.length;
    const nextTotal = totalNumberOfResources + PAGE_SIZE;

    setMultipleQueryParams([
      {
        name: "total",
        value: nextTotal.toString(),
      },
    ]);
  };

  return (
    <Center bgColor="backgrounds.200" mt="50px" py="4" rounded="lg">
      <Button colorScheme="brand" size="sm" onClick={getNextData}>
        Show more
      </Button>
    </Center>
  );
};
