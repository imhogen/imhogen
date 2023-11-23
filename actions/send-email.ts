"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  //console.log("Running on server");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log(email, message, firstname, lastname);

  // if (!message || typeof message !== "string") {
  //   return {
  //     error: "Invalid message",
  //   };
  // }

  // if (!email || typeof message !== "string") {
  //   return {
  //     error: "Invalid email",
  //   };
  // }

  await resend.emails.send({
    from: "Contact form <onboarding@resend.dev>",
    to: "danielbraimah256@gmail.com",
    subject: "Message from contact form",
    text: message as string,
    reply_to: email as string,
  });
};
