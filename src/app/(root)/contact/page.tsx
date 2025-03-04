import Form from "next/form";
import Button from "../components/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Contact",
  description: "Contact Form",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4 dark:text-white">
      <h1 className="mr-auto text-2xl font-bold">Contact</h1>
      <Form className="flex flex-col gap-8" action="">
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="rounded-lg text-sm p-4 bg-gray-100 focus:bg-white placeholder:text-gray-500 border border-gray-300"
            type="text"
            placeholder="Shohei Ohtani"
            maxLength={50}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="rounded-lg text-sm p-4 bg-gray-100 focus:bg-white placeholder:text-gray-500 border border-gray-300"
            type="text"
            placeholder="shohei17ohtani@gmail.com"
            maxLength={50}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="rounded-lg text-sm p-4 resize-none bg-gray-100 focus:bg-white placeholder:text-gray-500 border border-gray-300"
            placeholder="Message"
          />
        </div>
        <Button
          className="w-fit px-8 py-2 mx-auto"
          type="submit"
          variant="fill"
          theme="primary"
          size={"lg"}
          label="Submit"
        />
      </Form>
    </div>
  );
}
