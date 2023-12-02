import { useSearchParams } from "next/navigation";

export const queryIds = {
  query: "query",
  tag: "tag",
};

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  const getValue = (param: string) => {
    const rawParamValue = searchParams.get(param) || "";

    return decodeURIComponent(rawParamValue);
  };

  const rawSearchQuery = getValue(queryIds.query) || null;
  const rawTagQuery = getValue(queryIds.tag) || null;

  return {
    query: getValue(queryIds.query),
    tag: getValue(queryIds.tag),
    searchQuery: rawSearchQuery ? rawSearchQuery.split("&") : [],
    tagQuery: rawTagQuery ? rawTagQuery.split("&") : [],
  };
};
