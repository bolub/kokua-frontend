import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Text,
  Icon,
} from "@chakra-ui/react";
import { ResourceSuggestion } from "../resource-data-section/types";

export const BulbIcon = (props: any) => {
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
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
};

export const SuggestedIndicator = ({ data }: { data: ResourceSuggestion }) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Button rounded="lg" size="sm" w="32px" h="32px" colorScheme="yellow">
          <Icon fontSize="16px" as={BulbIcon} />
        </Button>
      </PopoverTrigger>
      <PopoverContent maxW="fit-content" bgColor="gray.900" color="white">
        <PopoverBody>
          <Text fontSize="xs" fontWeight={500}>
            Suggested by <b>{data.fullname}</b>
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
