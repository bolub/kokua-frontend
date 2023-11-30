import { useRouter } from "next/navigation";

export const useQueryParamsActions = () => {
  const router = useRouter();

  const setQueryParam = ({ name, value }: { name: string; value: string }) => {
    const search = new URLSearchParams(window.location.search);

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

  return {
    setQueryParam,
    removeQueryParam,
  };
};
