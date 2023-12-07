import { defineField, defineType } from "sanity";

export default defineType({
  name: "suggestion",
  title: "Suggestions",
  type: "document",
  fields: [
    defineField({
      name: "fullname",
      title: "Fullname or Alias",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    }),
    defineField({
      name: "resource_title",
      title: "Resource title",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    }),
    defineField({
      name: "resource_subtitle",
      title: "Resource subtitle",
      type: "text",
      validation: (Rule) => {
        return Rule.required();
      },
    }),
    defineField({
      name: "resource_url",
      title: "Resource url",
      type: "url",
      validation: (Rule) => {
        return Rule.required();
      },
    }),

    defineField({
      name: "resource_tags",
      title: "Resource Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    }),
  ],
});
