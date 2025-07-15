"use client";
import Button from "../../components/button";
import { useActionState } from "react";
import { sendEmail } from "../lib/action";
import Form from "next/form";

export default function ContactForm() {
  const initialState = { name: "", email: "", message: "" };
  const [state, dispatch] = useActionState(sendEmail, initialState);
  return (
    <Form className="flex flex-col gap-8" action={dispatch}>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="rounded-lg text-sm p-4 bg-gray-100 focus:bg-white placeholder:text-gray-500 border border-gray-300"
          type="text"
          placeholder="Shohei Ohtani"
          maxLength={50}
        />
        {state.errors?.name && (
          <p className="text-red-500">{state.errors.name.errors[0]}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          className="rounded-lg text-sm p-4 bg-gray-100 focus:bg-white placeholder:text-gray-500 border border-gray-300"
          type="text"
          placeholder="shohei17ohtani@gmail.com"
          maxLength={50}
        />
        {state.errors?.email && (
          <p className="text-red-500">{state.errors.email.errors[0]}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          name="message"
          className="rounded-lg text-sm p-4 resize-none bg-gray-100 focus:bg-white placeholder:text-gray-500 border border-gray-300"
          placeholder="Message"
        />
        {state.errors?.message && (
          <p className="text-red-500">{state.errors.message.errors[0]}</p>
        )}
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
  );
}
