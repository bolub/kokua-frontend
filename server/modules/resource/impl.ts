import prisma from '../../../utils/db';
import { ResourceServiceType } from './interface';

const all: ResourceServiceType['all'] = async () => {
  return await prisma.resource.findMany();
};

const findByTag: ResourceServiceType['findByTag'] = async ({ name }) => {
  try {
    return await prisma.resource.findMany({
      where: {
        tags: {
          some: {
            name: {
              contains: name.toLowerCase(),
            },
          },
        },
      },
      include: {
        tags: true,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const find: ResourceServiceType['find'] = async ({ name }) => {
  const data = await prisma.resource.findMany({
    where: {
      OR: [
        {
          name,
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
    console.log(error);
    throw error;
  }
};

export const ResourceService: ResourceServiceType = {
  all,
  findByTag,
  find,
};
