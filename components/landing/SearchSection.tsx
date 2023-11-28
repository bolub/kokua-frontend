import {
  Box,
  Button,
  chakra,
  Container,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";

import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import TagsSection from "./TagsSection";
import { Tag } from "@prisma/client";

const SearchSection: FC<{ data?: Tag[] }> = ({ data }) => {
  const [showTags, setShowTags] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <chakra.section is="search">
      <Container mb={{ base: "40px", md: "100px" }}>
        <chakra.form
          onSubmit={(e) => {
            e.preventDefault();

            router.push(`/resources/${value}?type=search`);
          }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              top={"10px"}
              left="20px"
              // eslint-disable-next-line
              children={
                <Icon fontSize="20px" color="gray.500" as={HiOutlineSearch} />
              }
            />
            <Input
              type="search"
              placeholder="Search Resource..."
              _focus={{
                borderColor: "brand.500",
              }}
              onFocus={() => {
                setShowTags(true);
              }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              rounded="lg"
              pl="60px"
              fontWeight="medium"
              height="60px"
              borderWidth="1.4px"
              borderColor={"gray.300"}
              isRequired
            />
          </InputGroup>
        </chakra.form>

        {/* Tags */}
        {showTags && (
          <Box mt="20px">
            <TagsSection data={data} />
            <Button
              size="xs"
              mt="30px"
              leftIcon={<Icon as={HiOutlineX} />}
              onClick={() => {
                setShowTags(false);
              }}
            >
              Close
            </Button>
          </Box>
        )}
      </Container>
    </chakra.section>
  );
};

export default SearchSection;
