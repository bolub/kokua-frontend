import {
  chakra,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";

const SearchSection = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <chakra.section>
      <chakra.form
        mb="32px"
        onSubmit={(e) => {
          e.preventDefault();

          router.push(`/?query=${value}&type=search`);
        }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            top={"5px"}
            left="10px"
            // eslint-disable-next-line
            children={
              <Icon fontSize="18px" color="gray.500" as={HiOutlineSearch} />
            }
          />
          <Input
            type="search"
            placeholder="Search Resource..."
            _focus={{
              shadow: "none",
              outline: "none",
              borderColor: "gray.500",
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            rounded="xl"
            pl="50px"
            pr="32px"
            fontWeight="semibold"
            fontSize="sm"
            height="50px"
            borderWidth="1.4px"
            borderColor={"gray.300"}
            isRequired
          />
        </InputGroup>
      </chakra.form>
    </chakra.section>
  );
};

export default SearchSection;
