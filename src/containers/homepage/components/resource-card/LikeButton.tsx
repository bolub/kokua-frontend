"use client";

import { Button } from "@chakra-ui/react";
import { HiOutlineThumbUp, HiThumbUp } from "react-icons/hi";
import { useResourceDetails } from "./useResourceDetails";

export const LikeButton = ({
  resourceId,
  upvotes,
}: {
  resourceId: string;
  upvotes: number;
}) => {
  const { resourceDetails, increaseResourceCount, upV } = useResourceDetails({
    resourceId,
    upvotes,
  });
  const hasLiked = Boolean(resourceDetails);

  return (
    <>
      <Button
        bgColor={hasLiked ? "rgba(0, 24, 231, 0.1)" : ""}
        color={hasLiked ? "rgb(0, 24, 231)" : ""}
        onClick={() => {
          if (!hasLiked) {
            increaseResourceCount();
          }
        }}
        leftIcon={hasLiked ? <HiThumbUp /> : <HiOutlineThumbUp />}
        rounded="lg"
        size="sm"
      >
        {upV || 0}
      </Button>
    </>
  );
};
