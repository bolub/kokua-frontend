import { Tag } from "@prisma/client";

export interface TagsServiceType {
  all: () => Promise<Tag[]>;
  find: (args: { name: string }) => Promise<Tag[]>;
}
