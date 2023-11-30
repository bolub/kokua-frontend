"use client";

import {
  chakra,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { HiOutlineSearch } from "react-icons/hi";
import { queryIds, useQueryParams } from "./useQueryParams";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { ChangeEvent } from "react";

export const SearchInput = () => {
  const { query } = useQueryParams();
  const { setQueryParam, clearQueryParams } = useQueryParamsActions();

  return (
    <chakra.section>
      <chakra.form
        mb="32px"
        onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const query = (formData.get("query") as string) || "";

          setQueryParam({
            name: queryIds.query,
            value: query,
          });
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" top={"5px"} left="10px">
            <Icon fontSize="18px" color="gray.500" as={HiOutlineSearch} />
          </InputLeftElement>

          <Input
            type="search"
            placeholder="Search Resource..."
            _focus={{
              shadow: "none",
              outline: "none",
              borderColor: "gray.500",
            }}
            defaultValue={query}
            rounded="xl"
            pl="50px"
            pr="32px"
            fontWeight="semibold"
            fontSize="sm"
            height="50px"
            borderWidth="1.4px"
            borderColor={"gray.300"}
            name="query"
          />
        </InputGroup>
      </chakra.form>
    </chakra.section>
  );
};
