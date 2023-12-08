import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const InfoIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
};

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
          spacing={isVisible ? 8 : 0}
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
            <FormHelperText
              display="flex"
              alignItems="center"
              gap="3px"
              color="gray.500"
            >
              <Icon fontSize="sm" as={InfoIcon} />

              <Text as="span" fontSize="xs" fontWeight={500}>
                We use this for recognition when the resource is published
              </Text>
            </FormHelperText>
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
