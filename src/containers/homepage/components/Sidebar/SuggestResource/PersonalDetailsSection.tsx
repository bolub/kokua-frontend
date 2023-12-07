import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export const PersonalDetailsSection = ({
  isVisible,
  moveToNextStage,
}: {
  isVisible: boolean;
  moveToNextStage: () => void;
}) => {
  return (
    <>
      <Box
        borderBottomWidth={isVisible ? "1px" : ""}
        pb={isVisible ? "32px" : ""}
      >
        {isVisible && (
          <Text fontSize="xs" fontWeight={600} color="gray.500">
            Personal details
          </Text>
        )}

        <VStack
          align="start"
          spacing={isVisible ? 5 : 0}
          mt={isVisible ? "16px" : ""}
        >
          <FormControl isRequired hidden={isVisible ? false : true}>
            <FormLabel fontSize="sm" mb="1">
              Fullname or Alias
            </FormLabel>
            <Input
              type="text"
              name="fullname"
              variant="filled"
              placeholder="Chandler bing"
            />
          </FormControl>

          <FormControl isRequired hidden={isVisible ? false : true}>
            <FormLabel fontSize="sm" mb="1">
              Email address
            </FormLabel>
            <Input
              type="email"
              name="email"
              variant="filled"
              placeholder="chandler@email.com"
            />
          </FormControl>
        </VStack>
      </Box>

      {isVisible && (
        <Button
          type="button"
          ml="auto"
          rounded="xl"
          fontSize="sm"
          mt="24px"
          colorScheme="brand"
          onClick={moveToNextStage}
        >
          Next
        </Button>
      )}
    </>
  );
};
