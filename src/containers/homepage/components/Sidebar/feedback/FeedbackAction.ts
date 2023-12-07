"use server";

import { baseUrl } from "@/utils/api";
import { z } from "zod";

const feedbackSchema = z.object({
  message: z.string(),
});

type Status = "success" | "error";

export const feedbackAction = async (prevState: any, formData: FormData) => {
  const details = feedbackSchema.parse({
    message: formData.get("message"),
  });

  try {
    await fetch(`${baseUrl}/api/feedback`, {
      method: "POST",
      body: JSON.stringify(details),
    });

    return {
      status: "success" as Status,
      message: "Thanks for the feedback 🙂",
    };
  } catch (error) {
    return {
      status: "error" as Status,
      message: "Something happened sorry",
    };
  }
};
