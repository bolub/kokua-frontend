import { Box, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <>
      <Box bg="gray.900" color="white" rounded="lg" py="16px" px="18px">
        <Text fontSize={"sm"} fontWeight="semibold">
          Kokua is a place for developers to explore different resources for
          their daily tasks
        </Text>
      </Box>

      <Box mt="54px">
        <Text
          as="span"
          fontWeight={"extrabold"}
          fontSize={"xs"}
          textTransform={"uppercase"}
        >
          Resources by
        </Text>

        <VStack
          mt="16px"
          align="start"
          spacing={4}
          fontSize={"sm"}
          fontWeight={"medium"}
        >
          <Text as={Link} href="/">
            Programming language
          </Text>

          <Text as={Link} href="/">
            Frameworks/Libraries
          </Text>

          <Text as={Link} href="/">
            Courses
          </Text>

          <Text as={Link} href="/">
            Field
          </Text>

          <Text as={Link} href="/">
            UI Components
          </Text>

          <Text as={Link} href="/">
            Tags
          </Text>
        </VStack>
      </Box>
    </>
  );
};
