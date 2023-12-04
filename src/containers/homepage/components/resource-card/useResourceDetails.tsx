import { db } from "@/utils/db";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { client } from "../../../../../sanity/lib/client";
import { useNewId } from "@/hooks/useNewId";

export const useResourceDetails = ({
  resourceId,
  upvotes,
}: {
  resourceId: string;
  upvotes: number;
}) => {
  const { newId } = useNewId();

  const [upV, setUpV] = useState(upvotes);

  const resourceDetails = useLiveQuery(() =>
    db.products.where({ resourceId }).first()
  );

  const increaseResourceCount = async () => {
    setUpV((prev) => prev + 1);

    client
      .patch(resourceId)
      .setIfMissing({ upvotes: 0 })
      .inc({ upvotes: 1 })
      .commit()
      .then(() => {
        if (!resourceDetails) {
          db.products.add({
            userId: newId,
            resourceId,
          });
        }
      })
      .catch(() => {
        setUpV((prev) => prev - 1);
      });
  };

  return {
    resourceDetails,
    increaseResourceCount,
    upV,
  };
};
