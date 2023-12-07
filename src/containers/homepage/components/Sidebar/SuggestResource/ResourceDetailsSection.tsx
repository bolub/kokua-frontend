import {
  componentsDesktop,
  suggestSelectChakraStyles,
} from "@/components/SearchInput/components";
import { useOptions } from "@/components/SearchInput/useOptions";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { AsyncCreatableSelect } from "chakra-react-select";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      ml="auto"
      rounded="xl"
      fontSize="sm"
      mt="24px"
      type="submit"
      colorScheme="brand"
      isLoading={pending}
    >
      Submit Resource
    </Button>
  );
};

export const ResourceDetailsSection = ({
  isVisible,
  moveToPrevStage,
}: {
  isVisible: boolean;
  moveToPrevStage: () => void;
}) => {
  const { defaultOptions, promiseOptions } = useOptions();

  return (
    <>
      <Box
        borderBottomWidth={isVisible ? "1px" : ""}
        pb={isVisible ? "32px" : ""}
      >
        {isVisible && (
          <Text fontSize="xs" fontWeight={600} color="gray.500">
            Resource details
          </Text>
        )}

        <VStack
          align="start"
          spacing={isVisible ? 5 : 0}
          mt={isVisible ? "16px" : ""}
        >
          <FormControl isRequired hidden={isVisible ? false : true}>
            <FormLabel fontSize="sm" mb="1">
              Resource title
            </FormLabel>
            <Input
              type="text"
              name="resource_title"
              variant="filled"
              placeholder="New resource suggestion"
            />
          </FormControl>

          <FormControl isRequired hidden={isVisible ? false : true}>
            <FormLabel fontSize="sm" mb="1">
              Resource subtitle
            </FormLabel>

            <Textarea
              name="resource_subtitle"
              variant="filled"
              placeholder="New resource suggestion"
              fontSize="sm"
              rounded="xl"
            ></Textarea>
          </FormControl>

          <FormControl isRequired hidden={isVisible ? false : true}>
            <FormLabel fontSize="sm" mb="1">
              Resource url
            </FormLabel>
            <Input
              type="url"
              name="resource_url"
              variant="filled"
              placeholder="https://example.com"
            />
          </FormControl>

          <FormControl isRequired hidden={isVisible ? false : true}>
            <FormLabel fontSize="sm" mb="1">
              Resource tags
            </FormLabel>

            <AsyncCreatableSelect
              form="formList"
              variant="filled"
              name="search"
              chakraStyles={suggestSelectChakraStyles}
              placeholder="Search tags..."
              formatCreateLabel={(userInput) => `Create "${userInput}"`}
              loadingMessage={() => "🔎 Give it a sec..."}
              noOptionsMessage={() => "Search for something"}
              components={componentsDesktop}
              isMulti
              isSearchable
              inputId={"search"}
              instanceId={"search-instance"}
              options={defaultOptions}
              defaultOptions={defaultOptions}
              loadOptions={promiseOptions}
              cacheOptions
              delimiter="|"
            />
          </FormControl>
        </VStack>
      </Box>

      {isVisible && (
        <HStack w="full" justifyContent="space-between">
          <Button
            type="button"
            rounded="xl"
            fontSize="sm"
            mt="24px"
            onClick={moveToPrevStage}
          >
            Prev
          </Button>
          <SubmitButton />
        </HStack>
      )}
    </>
  );
};
