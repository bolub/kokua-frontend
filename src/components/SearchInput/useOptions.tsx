import { useQueryParams } from "./useQueryParams";
import { Tag } from "@prisma/client";

async function getData({
  name,
}: {
  name: string;
}): Promise<{ allTags: Tag[] }> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || process.env.VERCEL_URL
    }/tags?name=${name}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const useOptions = () => {
  const { searchQuery } = useQueryParams();

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

  const queryOptions = searchQuery?.map((option) => {
    return {
      label: option,
      value: option,
    };
  });

  const promiseOptions = async (searchQuery: string) => {
    const { allTags } = await getData({ name: searchQuery });

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
