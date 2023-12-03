import { SearchInput } from "@/components/SearchInput/SearchInput";
import ResourceDataSection from "./components/resource-data-section/ResourceDataSection";
import { SearchParams } from "@/app/(website)/page";
import { Suspense } from "react";
import { ResourcesLoading } from "./components/LoadingSkeleton";

export const HomePage = ({ params }: { params: SearchParams }) => {
  return (
    <>
      <Suspense>
        <SearchInput />
      </Suspense>

      <Suspense fallback={<ResourcesLoading />}>
        <ResourceDataSection params={params} />
      </Suspense>
    </>
  );
};
