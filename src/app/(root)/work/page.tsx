import Image from "next/image";
import { CareerHistory } from "../constants/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio - Work",
  description: "Tomoya's Career Journey",
};

export default function Page() {
  return (
    <section className="flex flex-col gap-4 max-w-3xl px-4 mx-auto sm:px-0 text-black dark:text-white">
      <h1 className="mr-auto text-2xl font-bold">Work</h1>
      <ul className="list-none flex flex-col gap-6">
        {CareerHistory.map((c) => (
          <li className="border-b border-gray-200 pt-2 pb-4" key={c.name}>
            <Link
              className="sm:grid sm:grid-cols-3 items-center"
              href={`/work/${c.id}`}
            >
              <Image
                className="w-full"
                src={c.image}
                width={300}
                height={200}
                alt={c.name}
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg">{c.name}</h3>
                <p className="text-base">{c.abstraction}</p>
                <p className="hidden sm:block text-sm">{c.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
