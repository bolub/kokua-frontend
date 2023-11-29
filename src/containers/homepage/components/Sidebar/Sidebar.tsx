import { Box, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { NavItemCollapse } from "./NavItemCollapse";
import { FrameworkService } from "../../../../../server/modules/framework/impl";
import { LanguageService } from "../../../../../server/modules/language/impl";
import { SearchParams } from "@/app/page";

export const Sidebar = async ({ params }: { params: SearchParams }) => {
  const frameworks = await FrameworkService.all();
  const languages = await LanguageService.all();

  const mappedLanguages = languages.map((language) => {
    return {
      id: language.id,
      label: language.name,
      href: `?tag=${language.name}`,
    };
  });

  const mappedFrameworks = frameworks.map((framework) => {
    return {
      id: framework.id,
      label: framework.name,
      href: `?tag=${framework.name}`,
    };
  });

  const isCourseActive = params.tag?.includes("course");

  return (
    <>
      <Box bg="gray.900" color="white" rounded="lg" py="16px" px="18px">
        <Text fontSize={"sm"} fontWeight="semibold">
          Kokua is a place for developers to explore different resources for
          their daily tasks
        </Text>
      </Box>

      <Box mt="54px">
        <Text
          as="span"
          fontWeight={"extrabold"}
          fontSize={"xs"}
          textTransform={"uppercase"}
        >
          Resources by
        </Text>

        <VStack
          mt="16px"
          align="start"
          spacing={4}
          fontSize={"sm"}
          fontWeight={"medium"}
        >
          <NavItemCollapse
            label="Programming language"
            options={mappedLanguages}
          />

          <NavItemCollapse
            label="Frameworks/Libraries"
            options={mappedFrameworks}
          />

          <Text
            as={Link}
            href="/?tag=course"
            fontWeight={!isCourseActive ? "medium" : "bold"}
          >
            Courses
          </Text>

          <NavItemCollapse
            label="Specialty"
            options={[
              {
                id: "frontend",
                label: "Frontend",
                href: "?tag=frontend",
              },
              {
                id: "backend",
                label: "Backend",
                href: "?tag=backend",
              },
              {
                id: "fullstack",
                label: "Fullstack",
                href: "?tag=fullstack",
              },
            ]}
          />

          {/* <Text as={Link} href="/">
            Field
          </Text> */}

          {/* <Text as={Link} href="/">
            UI Components
          </Text> */}
        </VStack>
      </Box>
    </>
  );
};
