import React from "react";
import ResourceDataSection from "../../../ResourcePage/ResourceDataSection";
import { Resource } from "@prisma/client";
import SearchSection from "../../../landing/SearchSection";

export const Content = ({ resources }: { resources: Resource[] }) => {
  return (
    <>
      <SearchSection />

      <ResourceDataSection data={resources} />
    </>
  );
};
