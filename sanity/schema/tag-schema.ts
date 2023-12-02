import { defineField, defineType } from "sanity";

export default defineType({
  name: "tag",
  title: "Tags",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    }),
  ],
});
