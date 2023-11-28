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
              as="a"
              cursor="pointer"
              href="#main"
              mt="31px"
              fontSize="16px"
              borderColor={"brand.500"}
              borderRadius="0px"
              borderWidth={"2px"}
              color={"brand.500"}
              fontWeight={"700"}
              rightIcon={<HiArrowDown />}
              py="10px"
              px="18px"
              bgColor="white"
            >
              Start Exploring
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
