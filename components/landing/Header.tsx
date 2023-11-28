import { Box, Button, HStack, Text, chakra, Container } from "@chakra-ui/react";
import React from "react";
import Robot from "../Robot";
import { HiArrowDown } from "react-icons/hi";

const Header = () => {
  return (
    <chakra.header>
      <Container size="md" py={{ base: "61px", md: "32px" }}>
        <HStack w="full" justifyContent={"space-between"}>
          <Box>
            <Text fontWeight={"800"} fontSize={"32px"}>
              Free resources
            </Text>
            <Text fontWeight={"800"} fontSize={"32px"} color={"brand.500"}>
              Forever...
            </Text>

            <Button
              mt="40px"
              as="a"
              href="#main"
              bgColor="gray.900"
              color="white"
              size={"lg"}
              borderRadius="lg"
              fontWeight={"700"}
              fontSize={"16px"}
              px="32px"
              py="28px"
              rightIcon={<HiArrowDown />}
              _hover={{
                backgroundColor: "gray.700",
              }}
            >
              Start exploring
            </Button>
          </Box>

          <Box display={{ base: "none", md: "block" }}>
            <Robot />
          </Box>
        </HStack>
      </Container>
    </chakra.header>
  );
};

export default Header;
