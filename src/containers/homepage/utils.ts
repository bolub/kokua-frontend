import { SearchParams } from "@/app/(website)/page";

export const getResourceParams = (params: SearchParams) => {
  return {
    search: decodeURIComponent(params.query || "").split("&"),
    tag: decodeURIComponent(params.tag || "").split("&"),
    total: decodeURIComponent(params.total || ""),
  };
};

export const PAGE_SIZE = 20;
