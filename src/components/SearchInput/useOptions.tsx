import { Tag } from "@/containers/homepage/components/ResourceDataSection";
import { useQueryParams } from "./useQueryParams";
import { client } from "../../../sanity/lib/client";

async function getData({
  searchQuery,
}: {
  searchQuery: string;
}): Promise<Tag[]> {
  const searchFilterAction = searchQuery
    ? `&& name match "${searchQuery}*"`
    : "";

  const query = `
  *[_type == "tag" ${searchFilterAction}]{
      _id,
      name
  }
`;

  return client.fetch(query);
}

export const useOptions = () => {
  const { searchQuery, tagQuery } = useQueryParams();

  const defaultOptions = [
    {
      label: "Suggested",
      options: [
        {
          label: "React",
          value: "React",
        },
        {
          label: "Vue",
          value: "Vue",
        },
        {
          label: "Angular",
          value: "Angular",
        },
        {
          label: "Frontend",
          value: "Frontend",
        },
        {
          label: "Backend",
          value: "Backend",
        },
        {
          label: "User Interface (UI)",
          value: "User Interface (UI)",
        },
        {
          label: "User Experience (UX)",
          value: "User Experience (UX)",
        },
      ],
    },
  ];

  const searchOptions = searchQuery?.map((option) => {
    return {
      label: option,
      value: option,
      __isNew__: true,
    };
  });

  const tagOptions = tagQuery?.map((option) => {
    return {
      label: option,
      value: option,
    };
  });

  const queryOptions = [...searchOptions, ...tagOptions];

  const promiseOptions = async (searchQuery: string) => {
    const allTags = await getData({ searchQuery });

    return allTags?.map((tag: any) => {
      return {
        label: tag.name,
        value: tag.name,
        type: "tag",
      };
    });
  };

  return {
    queryOptions,
    promiseOptions,
    defaultOptions,
  };
};
