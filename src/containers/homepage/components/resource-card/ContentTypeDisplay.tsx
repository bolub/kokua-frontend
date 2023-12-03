import useContentIcon from "@/hooks/useContentIcon";
import { Box } from "@chakra-ui/react";
import { ContentType } from "../resource-data-section/types";

export const ContentTypeDisplay = ({
  contentType,
}: {
  contentType?: ContentType;
}) => {
  return <Box>{useContentIcon(contentType)}</Box>;
};
