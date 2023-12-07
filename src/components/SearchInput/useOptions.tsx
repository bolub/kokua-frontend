import { useQueryParams } from "./useQueryParams";
import { client } from "../../../sanity/lib/client";
import { Tag } from "@/containers/homepage/components/resource-data-section/types";

async function getTags({
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
          label: "ReactJS",
          value: "1",
        },
        {
          label: "VueJS",
          value: "29",
        },
        {
          label: "Angular",
          value: "8eb0472e-e0e1-4722-aa40-eea18496d30f",
        },
        {
          label: "Frontend",
          value: "7",
        },
        {
          label: "Backend",
          value: "17",
        },
        {
          label: "User Interface (UI)",
          value: "22",
        },
        {
          label: "User Experience (UX)",
          value: "23",
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
    const allTags = await getTags({ searchQuery });

    return allTags?.map((tag) => {
      return {
        label: tag.name,
        value: tag._id,
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
