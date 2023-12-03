import { client } from "../../../../../sanity/lib/client";
import { Resource } from "./types";

export const getData = ({
  search = [],
  tag = [],
}: {
  search?: string[];
  tag?: string[];
}): Promise<Resource[]> => {
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

  const query = `
    *[_type == "resource" ${filterAction() || ""}] | order(_createdAt desc) {
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
