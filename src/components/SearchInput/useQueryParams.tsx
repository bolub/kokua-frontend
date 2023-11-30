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

  return {
    query: getValue(queryIds.query),
    tag: getValue(queryIds.tag),
  };
};
