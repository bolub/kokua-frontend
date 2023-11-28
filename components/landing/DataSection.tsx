import { chakra, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import Card from "../Card";
import { Framework, Language as PrismaLanguage } from "@prisma/client";

const DataSection: FC<{
  title: string;
  data?: Framework[] | PrismaLanguage[];
  type: "framework" | "language";
}> = ({ title, data }) => {
  return (
    <chakra.section id={title} mb={{ base: "40px", md: "100px" }}>
      <Container>
        <Heading as="h2" fontWeight="extrabold" fontSize={"18px"}>
          {title}
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          gap="19px"
          mt="25px"
        >
          {data?.map((resource) => {
            return (
              <Card
                href={`/resources/${resource.name}?type=search`}
                key={resource.id}
                title={resource.name}
                logo={resource.logo_url}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </chakra.section>
  );
};

export default DataSection;
