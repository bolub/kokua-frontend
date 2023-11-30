import { queryIds } from "@/components/SearchInput/useQueryParams";
import { useRouter } from "next/navigation";

export const useQueryParamsActions = () => {
  const router = useRouter();

  const setQueryParam = ({ name, value }: { name: string; value: string }) => {
    const search = new URLSearchParams();

    if (!value) {
      search.delete(name);
    } else {
      search.set(name, encodeURIComponent(value));
    }

    router.replace(`/?${search.toString()}`);
  };

  const removeQueryParam = (name: string) => {
    const search = new URLSearchParams(window.location.search);

    search.delete(name);

    router.replace(`/?${search.toString()}`);
  };

  const clearQueryParams = () => {
    const search = new URLSearchParams(window.location.search);

    search.delete(queryIds.query);
    search.delete(queryIds.tag);

    router.replace(`/?${search.toString()}`);
  };

  return {
    setQueryParam,
    removeQueryParam,
    clearQueryParams,
  };
};
