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
  const { setMultipleQueryParams } = useQueryParamsActions();
  const { defaultOptions, queryOptions, promiseOptions } = useOptions();

  const onChange = (optionValues: OnChangeValue<SelectOption, true>) => {
    const searchValuesToArrayOfStrings = optionValues
      .filter((option) => option?.__isNew__ === true)
      .map((option) => option.label)
      .join("&");

    const tagValuesToArrayOfStrings = optionValues
      .filter((option) => !option?.__isNew__)
      .map((option) => option.label)
      .join("&");

    setMultipleQueryParams([
      {
        name: queryIds.query,
        value: searchValuesToArrayOfStrings,
      },
      {
        name: queryIds.tag,
        value: tagValuesToArrayOfStrings,
      },
    ]);
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
            formatCreateLabel={(userInput) => `Search for "${userInput}"`}
            loadingMessage={(props) => {
              return "🔎 Give it a sec...";
            }}
            noOptionsMessage={(props) => {
              return "😥 Looks like this is out of our hands";
            }}
            components={componentsDesktop}
            isMulti
            isSearchable
            inputId={"search"}
            instanceId={"search-instance"}
            options={defaultOptions}
            loadOptions={promiseOptions}
            defaultOptions={defaultOptions}
            cacheOptions
            value={queryOptions}
            onChange={onChange}
          />
        </InputGroup>
      </Box>
    </chakra.section>
  );
};
