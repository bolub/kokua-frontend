"use server";

import { z } from "zod";

const SuggestResourceSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  resource_title: z.string(),
  resource_subtitle: z.string(),
  resource_url: z.string().url(),
  resource_tags: z.array(z.string()),
});

export const SuggestResourceAction = async (
  prevState: any,
  formData: FormData
) => {
  const resource_tags_string = formData.get("search") as string;

  const details = SuggestResourceSchema.parse({
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    resource_title: formData.get("resource_title"),
    resource_subtitle: formData.get("resource_subtitle"),
    resource_url: formData.get("resource_url"),
    resource_tags: resource_tags_string.split("|"),
  });

  try {
    await fetch("http://localhost:3000/api/suggest-resource", {
      method: "POST",
      body: JSON.stringify(details),
    });

    return {
      message: "Thanks for the suggestion 🙂, we'll get back to you soon",
    };
  } catch (error) {
    console.log(error);

    return {
      message: "Something happened sorry",
    };
  }
};
