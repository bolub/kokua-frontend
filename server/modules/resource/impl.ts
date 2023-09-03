import prisma from '../../../utils/db';
import { ResourceType } from './interface';

const all: ResourceType['all'] = async () => {
  return await prisma.resource.findMany();
};

const findByTag: ResourceType['findByTag'] = async ({ tagId }) => {
  return await prisma.resource.findMany({
    where: {
      tags: {
        some: {
          id: tagId,
        },
      },
    },
  });
};

export const Resource: ResourceType = {
  all,
  findByTag,
};
