"use server";
import { EmailTemplate } from "@/app/components/email/Email-template";
import { writeFile } from "fs";
import { join } from "path";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  //console.log("Running on server");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const message = formData.get("message");
  const file: File | null = formData.get("file") as unknown as File;

  if (!file) {
    throw new Error("No file uploaded");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join("/", "tmp", file.name);
  await writeFile(path, buffer, (err) => {
    if (err) throw err;
    console.log(`open${path} to see the uploaded file`);
  });

  console.log("running on serer");

  //need to make sure that i work on this block to handle errors
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
    to: "admin@imhogen.com",
    subject: "Message from contact form",
    react: React.createElement(EmailTemplate, {
      firstname: firstname as string,
      lastname: lastname as string,
      message: message as string,
      email: email as string,
    }),
    reply_to: email as string,
    attachments: [{ filename: file.name, content: buffer }],
  });

  return { success: true };
};
