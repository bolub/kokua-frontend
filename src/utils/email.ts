import { ReactNode } from "react";
import { Resend } from "resend";
import {
  CreateEmailOptions,
  CreateEmailResponse,
} from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);
const from = "Kokua <bolu@kokua.wiki>";

export const sendEmailHandler = async (emailDetails: CreateEmailOptions) => {
  return await resend.emails
    .send({
      ...emailDetails,
    })
    .catch((e) => {
      return {
        message: "Sorry couldn't send email",
      };
    });
};

export const sendEmail = async (emailDetails: {
  to: string | string[];
  subject: string;
  react: ReactNode;
}): Promise<CreateEmailResponse | { message: string }> => {
  const dataToSend = {
    ...emailDetails,
    from,
  };

  return await sendEmail(dataToSend).catch((e) => {
    return {
      message: "Sorry couldn't send email",
    };
  });
};
