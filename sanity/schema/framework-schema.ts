import { defineField, defineType } from "sanity";

export default defineType({
  name: "framework",
  title: "Frameworks",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "name",
      type: "reference",
      to: [{ type: "tag" }],
      validation: (rule) => {
        return rule.required();
      },
    }),
  ],
});
