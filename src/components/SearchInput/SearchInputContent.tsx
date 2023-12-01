"use client";

import {
  Box,
  chakra,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { CreatableSelect, OnChangeValue } from "chakra-react-select";

import { HiOutlineSearch } from "react-icons/hi";
import { queryIds, useQueryParams } from "./useQueryParams";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { chakraStyles, componentsDesktop, SelectOption } from "./components";
import { Tag } from "@prisma/client";

export const SearchInputContent = ({ tags }: { tags: Tag[] }) => {
  const { setQueryParam } = useQueryParamsActions();
  const { searchQuery } = useQueryParams();

  const onChange = (optionValues: OnChangeValue<SelectOption, true>) => {
    const valuesToArrayOfStrings = optionValues
      .map((option) => option.label)
      .join("&");

    setQueryParam({
      name: queryIds.query,
      value: valuesToArrayOfStrings,
    });
  };

  const options = tags?.map((tag) => {
    return {
      label: tag.name,
      value: tag.name,
      type: "tag",
    };
  });

  const queryOptions = searchQuery?.map((option) => {
    return {
      label: option,
      value: option,
    };
  });

  return (
    <chakra.section mb="32px">
      <Box mt="10px" w="full">
        <InputGroup width="full">
          <InputLeftElement pointerEvents="none" top={"5px"} left="10px">
            <Icon fontSize="18px" color="gray.500" as={HiOutlineSearch} />
          </InputLeftElement>

          <CreatableSelect
            placeholder="Search..."
            isSearchable
            isMulti
            variant="search"
            chakraStyles={chakraStyles}
            options={options}
            value={queryOptions}
            components={componentsDesktop}
            name="search"
            onChange={onChange}
            menuPortalTarget={document.body}
          />
        </InputGroup>
      </Box>
    </chakra.section>
  );
};
