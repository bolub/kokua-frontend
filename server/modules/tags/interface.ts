import { Tag } from '@prisma/client';

export interface TagsServiceType {
  all: () => Promise<Tag[]>;
}
