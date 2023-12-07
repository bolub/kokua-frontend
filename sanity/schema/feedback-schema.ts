import { defineField, defineType } from "sanity";

export default defineType({
  name: "feedback",
  title: "Feedback",
  type: "document",
  fields: [
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => {
        return Rule.required();
      },
    }),
  ],
});
