import prisma from "@/utils/db";

import { FrameworkServiceType } from "./interface";

const all: FrameworkServiceType["all"] = async () => {
  return await prisma.framework.findMany();
};

export const FrameworkService: FrameworkServiceType = {
  all,
};
