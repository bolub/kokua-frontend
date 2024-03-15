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
import { usePlausible } from "next-plausible";

import { useEffect, useState } from "react";

export const SearchInput = () => {
  const { setMultipleQueryParams } = useQueryParamsActions();
  const { defaultOptions, queryOptions, promiseOptions } = useOptions();

  const plausible = usePlausible();

  const onChange = (optionValues: OnChangeValue<SelectOption, true>) => {
    const allSearchValues = optionValues
      .filter((option) => option?.__isNew__ === true)
      .map((option) => option.label);

    const allTagValues = optionValues
      .filter((option) => !option?.__isNew__)
      .map((option) => option.label);

    setMultipleQueryParams([
      {
        name: queryIds.query,
        value: allSearchValues.join("&"),
      },
      {
        name: queryIds.tag,
        value: allTagValues.join("&"),
      },
    ]);

    plausible("pageview", {
      props: { tag: allTagValues.join("&"), query: allSearchValues.join("&") },
    });
  };

  const [wrappedDocument, setWrappedDocument] = useState<Document>();

  useEffect(() => {
    setWrappedDocument(document);
  }, []);

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
            menuPortalTarget={wrappedDocument?.body}
            chakraStyles={chakraStyles}
            placeholder="Search..."
            formatCreateLabel={(userInput) => `Search for "${userInput}"`}
            loadingMessage={() => "🔎 Give it a sec..."}
            noOptionsMessage={() => "😥 Looks like this is out of our hands"}
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
