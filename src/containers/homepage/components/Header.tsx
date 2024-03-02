import { SearchParams } from "@/app/(website)/page";
import { Text } from "@chakra-ui/react";

export const Header = ({ label }: { label: string } & SearchParams) => {
  return (
    <Text as="h1" mb="20px" fontWeight="bold">
      Showing {label}
    </Text>
  );
};
