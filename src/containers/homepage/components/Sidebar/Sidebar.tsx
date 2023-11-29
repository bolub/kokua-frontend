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
      <Box as="span" display="block" mb="32px">
        <Link href="/">
          <svg
            cursor="pointer"
            width="74"
            height="23"
            viewBox="0 0 74 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_116_3368)">
              <path
                d="M19.0553 2.60559H21.5388V12.2016L26.4635 6.95053H29.4365L24.0941 12.4582L29.7624 19.3357H26.6741L21.5388 13.1525V19.3334H19.0553V2.60559Z"
                fill="#0018E7"
              />
              <path
                d="M28.8741 13.1526C28.8741 8.94652 31.1271 6.62341 34.6577 6.62341C38.2577 6.62341 40.4412 9.1101 40.4412 13.1526C40.4412 17.3351 38.1883 19.6358 34.6577 19.6358C31.0577 19.6382 28.8741 17.1974 28.8741 13.1526ZM37.9094 13.1526C37.9094 10.3176 36.7483 8.71468 34.6577 8.71468C32.5671 8.71468 31.4059 10.274 31.4059 13.1526C31.4059 15.9641 32.5671 17.5446 34.6577 17.5446C36.7718 17.5469 37.9094 16.0135 37.9094 13.1526Z"
                fill="#0018E7"
              />
              <path
                d="M40.9506 2.60559H43.4329V12.2016L48.3623 6.95053H51.3353L45.9929 12.4582L51.6564 19.3357H48.5659L43.4329 13.1525V19.3334H40.9506V2.60559Z"
                fill="#0018E7"
              />
              <path
                d="M59.7424 6.91516H62.2047V19.3027H59.7424V17.6245C58.9294 18.9497 57.6247 19.5993 56.0494 19.5993C53.5177 19.5993 51.9377 18.1129 51.9377 15.1849V6.91516H54.4236V14.6824C54.4236 16.4712 55.1671 17.5398 56.8153 17.5398C58.6283 17.5398 59.7424 15.8922 59.7424 14.1705V6.91516Z"
                fill="#0018E7"
              />
              <path
                d="M63.1224 10.9941C63.5177 8.25202 65.3989 6.62561 68.4883 6.62561C71.8565 6.62561 73.5294 8.60037 73.5294 11.4825V16.3147C73.5294 17.8022 73.6683 18.6613 73.9471 19.3356H71.3459C71.16 18.8649 71.0906 18.22 71.0671 17.5233C70.5972 18.1811 69.9764 18.7168 69.257 19.0854C68.5375 19.4539 67.7402 19.6447 66.9318 19.6416C64.4236 19.6416 62.7047 18.4565 62.7047 16.0863C62.7047 14.3893 63.6342 13.1348 65.4918 12.5075C67.1389 11.9497 68.8142 11.8108 71.0436 11.7873V11.5048C71.0436 9.69249 70.2071 8.71688 68.3024 8.71688C66.7 8.71688 65.8412 9.59951 65.6083 10.9941H63.1224ZM67.3965 17.6857C67.8764 17.6887 68.352 17.5966 68.7959 17.4143C69.2398 17.2321 69.6431 16.9635 69.9824 16.624C70.3217 16.2846 70.5902 15.8812 70.7724 15.4372C70.9545 14.9932 71.0467 14.5174 71.0436 14.0374V13.4796C66.2824 13.5267 65.213 14.5717 65.213 15.9898C65.213 17.0361 66.073 17.6857 67.3965 17.6857Z"
                fill="#0018E7"
              />
              <path
                d="M6.95059 8.14852C6.69883 8.70399 6.52706 9.82671 6.52706 11.1212C6.52706 12.4417 6.70589 13.5844 6.96589 14.1269C7.06824 14.3435 7.18589 14.4659 7.30942 14.4659C7.43294 14.4659 7.54471 14.3482 7.65412 14.1269C7.72754 14.2177 7.8061 14.3042 7.88941 14.3858C8.50691 14.9939 9.33824 15.3353 10.2047 15.3367H11.2729C12.1466 15.3367 12.9845 15.6839 13.6022 16.3019C14.22 16.9198 14.5671 17.758 14.5671 18.6319V18.9497C14.5671 19.8236 14.22 20.6617 13.6022 21.2797C12.9845 21.8977 12.1466 22.2448 11.2729 22.2448H10.9506C10.0769 22.2448 9.23906 21.8977 8.6213 21.2797C8.00353 20.6617 7.65647 19.8236 7.65647 18.9497V17.9493C7.65606 17.5127 7.56914 17.0806 7.40073 16.6777C7.23231 16.275 6.98576 15.9096 6.6753 15.6027L6.62589 15.5544C6.40183 15.3318 6.14613 15.1434 5.86706 14.9954C5.38907 14.7379 4.85464 14.6033 4.31177 14.6035H3.29412C2.42046 14.6035 1.58259 14.2564 0.964825 13.6384C0.347058 13.0204 0 12.1823 0 11.3084V10.9918C0 10.1179 0.347058 9.27971 0.964825 8.66174C1.58259 8.04378 2.42046 7.69661 3.29412 7.69661H4.26588C4.82894 7.69675 5.38265 7.5525 5.87412 7.27765C6.14353 7.12671 6.39061 6.93896 6.60824 6.71982L6.70471 6.62332C6.94779 6.37604 7.14993 6.09161 7.30353 5.78069C7.53489 5.32186 7.65575 4.81528 7.65647 4.30139V3.29518C7.65647 2.42124 8.00353 1.5831 8.6213 0.965136C9.23906 0.34717 10.0769 0 10.9506 0H11.2671C12.1407 0 12.9786 0.34717 13.5964 0.965136C14.2141 1.5831 14.5612 2.42124 14.5612 3.29518V3.61176C14.5612 4.4857 14.2141 5.32384 13.5964 5.9418C12.9786 6.55977 12.1407 6.90694 11.2671 6.90694H10.2447C9.7194 6.90639 9.20169 7.03233 8.7353 7.27412C8.427 7.43115 8.14613 7.63701 7.90353 7.88373L7.85647 7.93198C7.78824 8.00024 7.72353 8.07202 7.66118 8.14734C7.55412 7.91197 7.43177 7.77781 7.30824 7.77781C7.18471 7.77781 7.05412 7.91197 6.95059 8.14852Z"
                fill="#0018E7"
              />
              <path
                d="M14.6129 10.9917V11.3083C14.6129 12.1822 14.2659 13.0204 13.6481 13.6384C13.0303 14.2563 12.1925 14.6035 11.3188 14.6035H10.3C9.75672 14.6033 9.22191 14.7379 8.7435 14.9954C8.46461 15.1436 8.20896 15.332 7.98467 15.5544L7.93526 15.6026C7.62417 15.9092 7.37696 16.2745 7.20793 16.6772C7.03891 17.0801 6.95143 17.5124 6.95056 17.9493V18.9496C6.95056 19.8235 6.6035 20.6617 5.98573 21.2797C5.36797 21.8976 4.5301 22.2448 3.65644 22.2448H3.34349C2.46985 22.2448 1.63198 21.8976 1.0142 21.2797C0.396435 20.6617 0.0493774 19.8235 0.0493774 18.9496V18.6319C0.0493774 17.7579 0.396435 16.9198 1.0142 16.3018C1.63198 15.6838 2.46985 15.3367 3.34349 15.3367H4.41173C4.89977 15.3356 5.38153 15.2266 5.8225 15.0175C6.26346 14.8084 6.65271 14.5042 6.96232 14.1269C7.06467 14.3434 7.18232 14.4658 7.30585 14.4658C7.42938 14.4658 7.54114 14.3481 7.65056 14.1269C7.91056 13.5843 8.08938 12.4416 8.08938 11.1212C8.08938 9.82663 7.91644 8.70392 7.66467 8.14844C7.55761 7.91307 7.43526 7.77891 7.31173 7.77891C7.1882 7.77891 7.05997 7.9119 6.95879 8.14844C6.89824 8.07337 6.83384 8.00149 6.76585 7.93308L6.71644 7.88483C6.4101 7.57532 6.04546 7.32963 5.64361 7.16197C5.24175 6.99431 4.81067 6.90799 4.37526 6.90804H3.34349C2.46985 6.90804 1.63198 6.56087 1.0142 5.94289C0.396435 5.32493 0.0493774 4.48679 0.0493774 3.61286V3.29629C0.0493774 2.42234 0.396435 1.5842 1.0142 0.966235C1.63198 0.348268 2.46985 0.00109863 3.34349 0.00109863H3.65644C4.5301 0.00109863 5.36797 0.348268 5.98573 0.966235C6.6035 1.5842 6.95056 2.42234 6.95056 3.29629V4.30249C6.95352 5.17067 7.29597 6.00322 7.90467 6.62207L8.00114 6.71857C8.30749 7.02807 8.67212 7.27376 9.07398 7.44143C9.47583 7.60908 9.90692 7.69539 10.3423 7.69536H11.3153C11.7483 7.69488 12.177 7.77982 12.5773 7.94528C12.9774 8.11075 13.3409 8.3535 13.6473 8.65966C13.9535 8.96581 14.1965 9.32937 14.3622 9.72952C14.5279 10.1297 14.613 10.5586 14.6129 10.9917Z"
                fill="#0018E7"
              />
            </g>
            <defs>
              <clipPath id="clip0_116_3368">
                <rect width="74" height="22.3602" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </Box>

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
