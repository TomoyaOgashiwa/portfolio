"use server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.RESEND_TO_EMAIL;

const schema = z.object({
  email: z.email(),
  name: z.string().min(1),
  message: z.string().min(1),
});

export type State = {
  errors?: {
    name?: { errors: string[] };
    email?: { errors: string[] };
    message?: { errors: string[] };
  };
  message?: string | null;
};

export async function sendEmail(_prevState: State, formData: FormData) {
  const parsed = schema.safeParse({
    email: formData.get("email")?.toString().trim(),
    name: formData.get("name")?.toString().trim(),
    message: formData.get("message")?.toString().trim(),
  });

  if (!parsed.success) {
    const errorTree = z.treeifyError(parsed.error);
    return { errors: errorTree.properties, message: parsed.error.message };
  }

  if (!toEmail) {
    return { message: "Email Address is not set" };
  }

  // TODO: Setting up the resend email
  try {
    const data = await resend.emails.send({
      from: `${parsed.data.name} <${parsed.data.email}>`, // Must be a verified domain
      to: toEmail,
      subject: `Contact from ${parsed.data.name}`,
      text: parsed.data.message,
    });
    console.log("data");
    console.log(data);

    if (data.error) {
      return { message: "Failed to send email." };
    }

    return { success: true };
  } catch (error) {
    console.error("error");
    console.error(error);
    return { message: "Failed to send email." };
  }
}
