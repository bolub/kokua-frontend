import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);
export const defaultEmailFrom = "Kokua <bolu@kokua.wiki>";

export const sendEmail = async (emailDetails: CreateEmailOptions) => {
  try {
    return await resend.emails.send(emailDetails);
  } catch (e) {
    return {
      message: "Sorry couldn't send email",
    };
  }
};
