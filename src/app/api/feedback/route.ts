import { sendEmail } from "@/utils/email";
import { z } from "zod";
import { client } from "../../../../sanity/lib/client";
import { ReceiveFeedback } from "@/emails/ReceiveFeedback";

const SuggestResourceSchema = z.object({
  message: z.string(),
});

const from = "Siegfried <bolu@siegfried.dev>";

export async function POST(request: Request) {
  const res = await request.json();

  const details = SuggestResourceSchema.parse(res);

  try {
    await client.create({
      _type: "feedback",
      message: details.message,
    });

    await sendEmail({
      from,
      to: ["abiol5202@gmail.com"],
      subject: `Feedback for Kokua`,
      react: ReceiveFeedback({
        message: details.message,
      }),
      text: "",
    });

    return Response.json({
      message: "success",
    });
  } catch (error) {
    return Response.json({ error });
  }
}
