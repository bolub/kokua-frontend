import { queryIds } from "@/components/SearchInput/useQueryParams";
import { useRouter } from "next/navigation";

type Params = { name: string; value: string };

export const useQueryParamsActions = () => {
  const router = useRouter();

  const setQueryParam = ({ name, value }: Params) => {
    const search = new URLSearchParams(window.location.search);

    if (!value) {
      search.delete(name);
    } else {
      search.set(name, encodeURIComponent(value));
    }

    router.replace(`/?${search.toString()}`);
  };

  const setMultipleQueryParams = (searchParams: Params[]) => {
    const search = new URLSearchParams(window.location.search);

    searchParams?.forEach((param) => {
      const { name, value } = param;

      if (!value) {
        search.delete(name);
      } else {
        search.set(name, encodeURIComponent(value));
      }
    });

    router.replace(`/?${search.toString()}`, { scroll: false });
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
    setMultipleQueryParams,
  };
};
