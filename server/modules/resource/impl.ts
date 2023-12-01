import prisma from "@/utils/db";

import { ResourceServiceType } from "./interface";

//   const tagFilter = tag || name;

//   return await prisma.resource.findMany({
//     where: {
//       OR: [
//         {
//           name: {
//             contains: name,
//             mode: "insensitive",
//           },
//         },
//         {
//           tags: {
//             some: {
//               name: {
//                 contains: tagFilter,
//                 mode: "insensitive",
//               },
//             },
//           },
//         },
//       ],
//     },
//     include: {
//       tags: true,
//     },
//   });
// };

const all: ResourceServiceType["all"] = async ({ name, tag }) => {
  const allResources = await prisma.resource.findMany({
    include: {
      tags: true,
    },
  });

  if (tag && !name) {
    return findByTag({ name: tag });
  }

  if (name && !tag) {
    return find({ name });
  }

  if (name && tag) {
    const test = await prisma.resource.findMany({
      where: {
        AND: [
          ...name.map((term) => ({
            name: {
              contains: term,
              mode: "insensitive" as const,
            },
          })),
          {
            tags: {
              some: {
                name: {
                  contains: tag,
                  mode: "insensitive" as const,
                },
              },
            },
          },
        ],
      },
      include: {
        tags: true,
      },
    });

    return test;
  }

  return allResources;
};

const findByTag: ResourceServiceType["findByTag"] = async ({ name }) => {
  try {
    return await prisma.resource.findMany({
      where: {
        tags: {
          some: {
            name: {
              contains: name,
            },
          },
        },
      },
      include: {
        tags: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

const find: ResourceServiceType["find"] = async ({ name }) => {
  return await prisma.resource.findMany({
    where: {
      OR: [
        ...name.map((term) => ({
          name: {
            contains: term,
            mode: "insensitive" as const,
          },
        })),
        ...name.map((term) => ({
          tags: {
            some: {
              name: {
                contains: term,
                mode: "insensitive" as const,
              },
            },
          },
        })),
      ],
    },
    include: {
      tags: true,
    },
  });
};

export const ResourceService: ResourceServiceType = {
  all,
  findByTag,
  find,
};
