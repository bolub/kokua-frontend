import { Resource, Tag } from "@prisma/client";

export type ResourceWithTags = Resource & {
  tags?: Tag[];
};

export interface ResourceServiceType {
  all: (args: { name?: string; tag?: string }) => Promise<ResourceWithTags[]>;
  findByTag: (args: { name: string }) => Promise<ResourceWithTags[]>;
  find: (args: { name: string }) => Promise<ResourceWithTags[]>;
}
