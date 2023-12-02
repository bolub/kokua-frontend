import useContentIcon from "@/hooks/useContentIcon";
import { Box } from "@chakra-ui/react";
import { ContentType } from "../ResourceDataSection";

export const ContentTypeDisplay = ({
  contentType,
}: {
  contentType?: ContentType;
}) => {
  return <Box>{useContentIcon(contentType)}</Box>;
};
