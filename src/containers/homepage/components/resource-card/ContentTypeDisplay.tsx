import useContentIcon from "@/hooks/useContentIcon";
import { Box } from "@chakra-ui/react";
import { ContentType } from "@prisma/client";

export const ContentTypeDisplay = ({
  contentType,
}: {
  contentType?: ContentType | null;
}) => {
  return <Box>{useContentIcon(contentType)}</Box>;
};
