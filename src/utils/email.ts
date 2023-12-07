import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend("re_HKhM6FUt_F9HZFjq515YpSKohEH5dQ8xF");

export const sendEmail = async (emailDetails: CreateEmailOptions) => {
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
