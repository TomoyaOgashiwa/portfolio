import type { Metadata } from "next";
import ContactForm from "./components/contact-form";

export const metadata: Metadata = {
  title: "Portfolio - Contact",
  description: "Contact Form",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4 text-black dark:text-white">
      <h1 className="mr-auto text-2xl font-bold">Contact</h1>
      <ContactForm />
    </div>
  );
}
