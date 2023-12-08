import { defineField, defineType } from "sanity";

export default defineType({
  name: "resource",
  title: "Resources",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "resource_type",
      title: "Resource type",
      type: "string",
      options: {
        list: [
          {
            title: "Package",
            value: "package",
          },

          {
            title: "Course",
            value: "course",
          },
          {
            title: "Tutorial or blog post",
            value: "tutorialOrBlogPost",
          },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "content_type",
      title: "Content type",
      type: "string",
      options: {
        list: [
          {
            title: "Video",
            value: "video",
          },

          {
            title: "Audio",
            value: "audio",
          },
          {
            title: "Article",
            value: "article",
          },
          {
            title: "Documentation",
            value: "documentation",
          },
          {
            title: "Document",
            value: "document",
          },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "external_url",
      title: "External url",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    }),
    defineField({
      name: "upvotes",
      title: "Upvotes",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "suggestedBy",
      title: "Suggested by",
      type: "reference",
      to: [{ type: "suggestion" }],
    }),
  ],
});
