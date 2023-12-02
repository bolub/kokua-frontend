import { type SchemaTypeDefinition } from "sanity";
import resourceSchema from "./schema/resource-schema";
import tagSchema from "./schema/tag-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [resourceSchema, tagSchema],
};
