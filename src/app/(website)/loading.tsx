import { Center, Text } from "@chakra-ui/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Center>
      <Text>Fetching data...</Text>
    </Center>
  );
}
