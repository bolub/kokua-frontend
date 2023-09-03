import { Resource } from '@prisma/client';

export interface ResourceType {
  all: () => Promise<Resource[]>;
  findByTag: (args: { tagId: string }) => Promise<Resource[]>;
}
