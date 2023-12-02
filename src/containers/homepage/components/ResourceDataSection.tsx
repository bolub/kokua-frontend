import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import ResourceCard from "./resource-card/ResourceCard";

import { Header } from "./Header";
import { SearchParams } from "@/app/(website)/page";
import { client } from "../../../../sanity/lib/client";

export type ResourceType = "package" | "course" | "tutorialOrBlogPost";
export type ContentType =
  | "video"
  | "audio"
  | "article"
  | "documentation"
  | "document";

export type Tag = {
  _id: string;
  name: string;
};

export type Resource = {
  _id: string;
  name: string;
  slug: string;
  resource_type: ResourceType;
  subtitle: string;
  content_type: ContentType;
  external_url: string;
  tags?: Tag[];
};

const getData = ({
  search = [],
  tag = [],
}: {
  search?: string[];
  tag?: string[];
}): Promise<Resource[]> => {
  const searchFilter = search?.length > 0 && search[0] !== "" ? search : null;
  const tagFilter = tag?.length > 0 && tag[0] !== "" ? tag : null;

  const searchMap = (conditional: (s: string) => string) => {
    return searchFilter?.map((s) => conditional(s)).join(" || ");
  };

  const searchFilterConditional = (s: string) => {
    return `name match "*${s}*"`;
  };

  const tagFilterConditional = (s: string) => {
    return `tags[]-> name match "*${s}*"`;
  };

  const tagMap = (conditional: (s: string) => string) => {
    return tagFilter?.map((s) => conditional(s)).join(" || ");
  };

  const tagFilterAction = tagFilter
    ? "&& (" + tagMap(tagFilterConditional) + ")"
    : "";

  const searchFilterAction = searchFilter
    ? "&& (" + searchMap(searchFilterConditional) + ")"
    : "";

  const searchTagFilterAction = `${searchFilterAction} ${tagFilterAction}`;

  const filterAction = () => {
    if (tagFilter && !searchFilter) {
      return tagFilterAction;
    }

    if (searchFilter && !tagFilter) {
      return searchFilterAction;
    }

    if (tagFilter && searchFilter) {
      return searchTagFilterAction;
    }
  };

  const query = `
    *[_type == "resource" ${filterAction() || ""}]{
      _id,
      'slug': slug.current,
      name,
      subtitle,
      resource_type,
      content_type,
      external_url,
      tags[]->{
        _id,
        name
      }
    }
  `;

  return client.fetch(query);
};

const ResourceDataSection: FC<{
  params: SearchParams;
}> = async ({ params }) => {
  const resources = await getData({
    search: decodeURIComponent(params.query || "").split("&"),
    tag: decodeURIComponent(params.tag || "").split("&"),
  });

  return (
    <Box mt="10px">
      <Header
        query={params.query}
        tag={params.tag}
        length={resources?.length}
      />

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="24px">
        {resources?.map((resource) => {
          return <ResourceCard key={resource._id} {...resource} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ResourceDataSection;
