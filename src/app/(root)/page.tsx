import Image from "next/image";
import Button from "./components/button";
import { CareerHistory, TechIcon } from "./constants/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Tomoya's Portfolio",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mt-10 text-black dark:text-white">
      <section className="flex flex-col gap-4 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="flex gap-6 max-sm:flex-col-reverse items-center">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl max-sm:text-center">
              Hi, I am Tomoya, Software Engineer
            </h1>
            <p className="max-sm:text-center">
              Software Engineer with over 3 years of experience building
              intuitive user interfaces and scalable web applications. Focusing
              primarily on Front-end development while also having experience
              working as a full stack developer.
            </p>
          </div>
          <Image
            className="max-sm:mx-auto"
            src="/intro.svg"
            alt="Next.js logo"
            width={180}
            height={200}
          />
        </div>
        <Button className="max-md:mx-auto w-fit" label="Download Resume" />
      </section>
      <section className="flex flex-col gap-4 max-w-3xl px-4 mx-auto sm:px-0">
        <h2 className="mx-auto sm:ml-0 sm:mr-auto text-xl font-semibold">
          Recent Career
        </h2>
        <ul className="list-none flex flex-col gap-6">
          {CareerHistory.map((c) => (
            <li className="border-b border-gray-200 pt-2 pb-4" key={c.name}>
              <Link
                className="sm:grid sm:grid-cols-2 gap-6 items-center"
                href={`/work/${c.id}`}
              >
                <Image
                  layout="responsive"
                  objectFit="cover"
                  src={c.image}
                  width={80}
                  height={80}
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
      <section className="flex flex-col gap-4">
        <h2 className="mx-auto text-xl font-semibold">Technologies</h2>
        <div className="bg-primary-25/50 dark:bg-primary-800/50 p-8 grid grid-cols-2 gap-6 sm:justify-evenly sm:flex sm:items-center">
          {TechIcon.map((t, i) => (
            <Image
              key={`${t.image}-${i}`}
              src={t.image}
              width={100}
              height={100}
              alt={t.alt}
              objectFit="cover"
              className="m-auto"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
