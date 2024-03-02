import { client } from "../../../../../sanity/lib/client";
import { PAGE_SIZE } from "../../utils";
import { Resource } from "./types";

type Queries = {
  search?: string[];
  tag?: string[];
  total?: string;
};

const actions = ({ search = [], tag = [] }: Queries) => {
  const searchFilter = search?.length > 0 && search[0] !== "" ? search : null;
  const tagFilter = tag?.length > 0 && tag[0] !== "" ? tag : null;

  //   =====
  const searchMap = (conditional: (s: string) => string) => {
    return searchFilter?.map((s) => conditional(s)).join(" || ");
  };
  const searchFilterConditional = (s: string) => {
    return `name match "*${s}*"`;
  };
  const searchFilterAction = searchFilter
    ? "&& (" + searchMap(searchFilterConditional) + ")"
    : "";

  // =====

  const tagFilterConditional = (s: string) => {
    return `tags[]-> name match "*${s}*"`;
  };
  const tagMap = (conditional: (s: string) => string) => {
    return tagFilter?.map((s) => conditional(s)).join(" || ");
  };
  const tagFilterAction = tagFilter
    ? "&& (" + tagMap(tagFilterConditional) + ")"
    : "";

  // =====
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

  return filterAction;
};

export const getResources = async ({
  search = [],
  tag = [],
  total,
}: Queries) => {
  const totalResourcesToDisplay =
    (!!total ? parseInt(total) : undefined) || PAGE_SIZE;

  const filterAction = actions({
    search,
    tag,
  });

  const query = `
    *[_type == "resource" ${
      filterAction() || ""
    } ] | order(_createdAt desc) [0...${totalResourcesToDisplay}] {
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
        },
        upvotes,
        suggestedBy -> {
          fullname
        }
      }
    `;

  const countQuery = `
    count(*[_type == 'resource'])
    `;

  const result = await client.fetch<Resource[]>(query);
  const count = await client.fetch<number>(countQuery);

  return {
    result,
    total: count,
  };
};
