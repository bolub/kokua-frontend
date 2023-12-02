import { SearchParams } from "@/app/(website)/page";
import { Text } from "@chakra-ui/react";

export const Header = ({ length }: { length: number } & SearchParams) => {
  return (
    <Text as="h1" mb="20px" fontWeight="bold">
      Showing all resources ({length})
    </Text>
  );
};
