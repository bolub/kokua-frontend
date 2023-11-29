import prisma from "@/utils/db";

import { ResourceServiceType } from "./interface";

const all: ResourceServiceType["all"] = async ({ name, tag }) => {
  const tagFilter = tag || name;

  return await prisma.resource.findMany({
    where: {
      OR: [
        {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
        {
          tags: {
            some: {
              name: {
                contains: tagFilter,
                mode: "insensitive",
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
  const data = await prisma.resource.findMany({
    where: {
      OR: [
        {
          name: {
            contains: name,
          },
        },
        {
          tags: {
            some: {
              name,
            },
          },
        },
      ],
    },
    include: {
      tags: true,
    },
  });

  try {
    return data;
  } catch (error) {
    throw error;
  }
};

export const ResourceService: ResourceServiceType = {
  all,
  findByTag,
  find,
};
