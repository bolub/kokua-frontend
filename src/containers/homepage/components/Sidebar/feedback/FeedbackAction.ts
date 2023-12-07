"use server";

import { z } from "zod";

const feedbackSchema = z.object({
  message: z.string(),
});

export const feedbackAction = async (prevState: any, formData: FormData) => {
  const details = feedbackSchema.parse({
    message: formData.get("message"),
  });

  try {
    await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      body: JSON.stringify(details),
    });

    return {
      message: "Thanks for the feedback 🙂",
    };
  } catch (error) {
    console.log(error);

    return {
      message: "Something happened sorry",
    };
  }
};
