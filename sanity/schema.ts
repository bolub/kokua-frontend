import { type SchemaTypeDefinition } from "sanity";
import resourceSchema from "./schema/resource-schema";
import tagSchema from "./schema/tag-schema";
import frameworkSchema from "./schema/framework-schema";
import languageSchema from "./schema/language-schema";
import suggestionSchema from "./schema/suggestion-schema";
import feedbackSchema from "./schema/feedback-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    resourceSchema,
    tagSchema,
    frameworkSchema,
    languageSchema,
    suggestionSchema,
    feedbackSchema,
  ],
};
