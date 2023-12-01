"use client";

import {
  Box,
  chakra,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { AsyncCreatableSelect, OnChangeValue } from "chakra-react-select";

import { HiOutlineSearch } from "react-icons/hi";
import { queryIds } from "./useQueryParams";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { chakraStyles, componentsDesktop, SelectOption } from "./components";
import { useOptions } from "./useOptions";

export const SearchInput = () => {
  const { setQueryParam } = useQueryParamsActions();
  const { defaultOptions, queryOptions, promiseOptions } = useOptions();

  const onChange = (optionValues: OnChangeValue<SelectOption, true>) => {
    const valuesToArrayOfStrings = optionValues
      .map((option) => option.label)
      .join("&");

    setQueryParam({
      name: queryIds.query,
      value: valuesToArrayOfStrings,
    });
  };

  return (
    <chakra.section mb="32px">
      <Box mt="10px" w="full">
        <InputGroup width="full">
          <InputLeftElement pointerEvents="none" top={"5px"} left="10px">
            <Icon fontSize="18px" color="gray.500" as={HiOutlineSearch} />
          </InputLeftElement>

          <AsyncCreatableSelect
            variant="search"
            name="search"
            menuPortalTarget={document.body}
            chakraStyles={chakraStyles}
            placeholder="Search..."
            components={componentsDesktop}
            isMulti
            isSearchable
            inputId={"search"}
            instanceId={"search-instance"}
            options={defaultOptions}
            loadOptions={promiseOptions}
            defaultOptions={defaultOptions}
            value={queryOptions}
            onChange={onChange}
          />
        </InputGroup>
      </Box>
    </chakra.section>
  );
};
