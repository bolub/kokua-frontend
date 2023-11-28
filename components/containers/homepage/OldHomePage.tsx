import React from "react";
import { trpc } from "../../../utils/trpc";
import { Box, chakra } from "@chakra-ui/react";
import DataSection from "../../landing/DataSection";
import SearchSection from "../../landing/SearchSection";
import Header from "../../landing/Header";
import { Framework, Language } from "@prisma/client";

const specialResources = [
  {
    id: "1",
    name: "Special",
    logo_url:
      "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/grinning-face_1f600.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const OldHomePage = ({
  languages,
  frameworks,
}: {
  languages: Language[];
  frameworks: Framework[];
}) => {
  const { data: tagsData } = trpc.tags.all.useQuery();

  return (
    <Box>
      <Header />

      <chakra.main id="main" py={"60px"}>
        <SearchSection data={tagsData} />

        <DataSection
          title=" Programming Languages"
          data={languages}
          type="language"
        />

        <DataSection
          title="Frameworks and Libraries"
          data={frameworks}
          type="framework"
        />

        <DataSection
          title="Special Resources"
          data={specialResources}
          type="framework"
        />
      </chakra.main>
    </Box>
  );
};
