import { Resource } from '@prisma/client';

export interface ResourceServiceType {
  all: () => Promise<Resource[]>;
  findByTag: (args: { name: string }) => Promise<Resource[]>;
  find: (args: { name: string }) => Promise<Resource[]>;
}
