import { SuggestionNotification } from "@/emails/SuggestionNotification";
import { sendEmail } from "@/utils/email";
import { z } from "zod";
import { client } from "../../../../sanity/lib/client";
import { v4 as uuidv4 } from "uuid";

const SuggestResourceSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  resource_title: z.string(),
  resource_subtitle: z.string(),
  resource_url: z.string().url(),
  resource_tags: z.array(z.string()),
});

const from = "Siegfried <bolu@siegfried.dev>";

const createSuggestion = async (
  details: z.infer<typeof SuggestResourceSchema>
): Promise<{ _id: string }> => {
  try {
    return await client.create({
      _type: "suggestion",
      fullname: details.fullname,
      email: details.email,
      resource_url: details.resource_url,
      resource_title: details.resource_title,
      resource_subtitle: details.resource_subtitle,
      resource_tags: details.resource_tags.map((tag) => ({
        _type: "reference",
        _ref: tag,
        _key: uuidv4(),
      })),
    });
  } catch (error) {
    // @ts-ignore
    return error;
  }
};

export async function POST(request: Request) {
  const res = await request.json();

  const details = SuggestResourceSchema.parse(res);

  try {
    const createdSuggestion = await createSuggestion(details);

    await Promise.allSettled([
      sendEmail({
        from,
        to: [details.email],
        subject: "Thanks for the suggestion 🙂",
        react: SuggestionNotification({
          firstName: details.fullname,
          details: {
            title: details.resource_title,
            subtitle: details.resource_subtitle,
            url: details.resource_url,
          },
        }),
        text: "",
      }),
      sendEmail({
        from,
        to: ["abiol5202@gmail.com"],
        subject: `Resource suggestion from ${details.fullname}`,
        react: SuggestionNotification({
          firstName: "Bolu",
          details: {
            title: details.resource_title,
            subtitle: details.resource_subtitle,
            url: details.resource_url,
          },
          isAdmin: true,
          resourceId: createdSuggestion._id,
        }),
        text: "",
      }),
    ]);

    return Response.json({
      message: "success",
    });
  } catch (error) {
    return Response.json({ error });
  }
}
