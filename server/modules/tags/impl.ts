import prisma from "@/utils/db";
import { TagsServiceType } from "./interface";

const all: TagsServiceType["all"] = async () => {
  return await prisma.tag.findMany();
};

export const TagsService: TagsServiceType = {
  all,
};
