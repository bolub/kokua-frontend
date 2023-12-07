import { Box, Flex, Icon, chakra } from "@chakra-ui/react";
import {
  ChakraStylesConfig,
  GroupProps,
  OptionProps,
  components,
} from "chakra-react-select";
import { HiOutlineSearch } from "react-icons/hi";

export type Option = {
  label: string;
  value: string;
  __isNew__?: boolean;
};

export type SearchOption = Option & {
  __isNew__: true;
  type?: undefined;
};

type TagOption = Option;

export type SelectOption = SearchOption | TagOption;

export const chakraStyles: ChakraStylesConfig<SelectOption, true> = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  valueContainer: (provided) => ({
    ...provided,
    // Space between search icon and content
    pl: "45px",
  }),
  menuList: (provided, state) => {
    return {
      ...provided,
      display: "flex",
      flexWrap: "wrap",
      gap: "8px !important",
      flexDir: "row",
      px: "32px",
      pt: "16px",
      pb: "28px",
      rounded: "xl",
      boxShadow: "lg",
    };
  },
  groupHeading: (provided) => ({
    ...provided,
    display: "flex",
    fontSize: "sm",
    width: "100%",
    p: "0px",
    mb: "12px !important",
  }),
};

export const suggestSelectChakraStyles: ChakraStylesConfig<SelectOption, true> =
  {
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
    menuList: (provided, state) => {
      return {
        ...provided,
        display: "flex",
        flexWrap: "wrap",
        gap: "8px !important",
        flexDir: "row",
        px: "20px",
        pt: "10px",
        pb: "20px",
        rounded: "xl",
        boxShadow: "lg",
        fontSize: "sm",
      };
    },
    groupHeading: (provided) => ({
      ...provided,
      display: "flex",
      fontSize: "sm",
      width: "100%",
      p: "0px",
      mb: "12px !important",
    }),
  };

export const Option = (props: OptionProps<SelectOption, true>) => {
  const isNewSearchValue = props.data?.__isNew__;

  return (
    <chakra.button
      w="fit-content"
      width="fit-content"
      fontSize="13px"
      fontWeight="medium"
      sx={{
        div: {
          display: "flex",
          cursor: "pointer",
          borderRadius: "4px",
          bgColor: isNewSearchValue ? "white" : "gray.background",
          borderColor: isNewSearchValue ? "GRAY_DIVIDERS" : "gray.background",
          borderWidth: "1px",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <components.Option {...props}>
        {isNewSearchValue && (
          <Icon
            fontSize="17px"
            color="black"
            strokeWidth="1.5px"
            as={HiOutlineSearch}
            mr="5px"
          />
        )}

        {props.children}
      </components.Option>
    </chakra.button>
  );
};

export const Group = (props: GroupProps<SelectOption, true>) => {
  return (
    <components.Group {...props}>
      <Box display={"flex"} gap="8px" flexWrap={"wrap"}>
        {props.children}
      </Box>
    </components.Group>
  );
};

const LoadingMessage = (props: any) => {
  return (
    <Flex w="full" textAlign="center" justifyContent="center">
      <components.LoadingMessage {...props}>
        {props.children}
      </components.LoadingMessage>
    </Flex>
  );
};

export const componentsDesktop = {
  Option,
  Group,
  LoadingMessage,
};
