import { Suspense } from "react";
import { TagsService } from "../../../server/modules/tags/impl";
import { SearchInputContent } from "./SearchInputContent";

export const SearchInput = async () => {
  const allTags = await TagsService.all();

  return (
    <Suspense fallback={<>SEARCH Fallback</>}>
      <SearchInputContent tags={allTags} />
    </Suspense>
  );
};
