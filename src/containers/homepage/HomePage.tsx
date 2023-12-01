import { SearchInput } from "@/components/SearchInput/SearchInput";
import ResourceDataSection from "./components/ResourceDataSection";
import { SearchParams } from "@/app/page";
import { Suspense } from "react";
import { ResourcesLoading } from "./components/LoadingSkeleton";

export const HomePage = ({ params }: { params: SearchParams }) => {
  return (
    <>
      <Suspense fallback={<>search...</>}>
        <SearchInput />
      </Suspense>

      <Suspense fallback={<ResourcesLoading />}>
        <ResourceDataSection params={params} />
      </Suspense>
    </>
  );
};
