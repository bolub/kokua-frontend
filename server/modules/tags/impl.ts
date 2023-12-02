import prisma from "@/utils/db";
import { TagsServiceType } from "./interface";

const all: TagsServiceType["all"] = async () => {
  return await prisma.tag.findMany();
};

const find: TagsServiceType["find"] = async ({ name }) => {
  return await prisma.tag.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
  });
};

export const TagsService: TagsServiceType = {
  all,
  find,
};
