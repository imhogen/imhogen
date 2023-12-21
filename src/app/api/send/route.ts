import { EmailTemplate } from "@/app/components/email/email-template";
import { writeFile, mkdirSync, existsSync } from "fs";
import { NextResponse } from "next/server";
import { join } from "path";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const data = await request.formData();
  const firstname = data.get("firstname");
  const lastname = data.get("lastname");
  const email = data.get("email");
  const message = data.get("message");
  const file: File | null = data.get("file") as unknown as File;
  // if (!file) {
  //   return NextResponse.json({ success: false });
  // }

  let buffer;

  if (file) {
    const bytes = await file.arrayBuffer();
    buffer = Buffer.from(bytes);

    const dir = join("/", "tmp");
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }

    const path = join(dir, file.name);
    await writeFile(path, buffer, (err) => {
      if (err) throw err;
      console.log(`open${path} to see the uploaded file`);
    });
  }
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
    attachments: file ? [{ filename: file.name, content: buffer }] : [],
  });

  return NextResponse.json({ success: true });
}
