import { TechIcon } from "../constants/constants";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - About",
  description: "Tomoya's Personality, Experience and Tech Skills",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 max-w-3xl px-4 mx-auto sm:px-0 dark:text-white">
        <h1 className="mr-auto text-2xl font-bold">About</h1>
        <section className="flex flex-col-reverse sm:grid sm:grid-cols-3 gap-4 items-center">
          <p className="font-semibold text-xl sm:col-span-2">
            Thank you for visiting my website.
            <br />
            On this page, I will provide a little more detail about myself.
          </p>
          <Image
            src={"/about.svg"}
            width={80}
            height={80}
            alt="about icon"
            layout="responsive"
          />
        </section>
        <section className="flex flex-col gap-4 max-w-3xl px-4 mx-auto sm:px-0">
          <h2 className="mx-auto sm:ml-0 sm:mr-auto text-xl font-semibold">
            Background
          </h2>
          <p>
            I was born in Japan and had the opportunity to study in France
            during my junior high school years. I hold a Bachelor’s degree and
            have diverse work experience, starting as a Salesperson in the
            Electronic Power field for over 3 years before transitioning into
            Software Engineering, where I have also worked for over 3 years.
          </p>
          <p>
            As a Software Engineer, I discussed business requirements with
            clients and team members, explored ways to improve UI/UX, and
            implemented solutions accordingly.
          </p>
          <p>
            I thrive in an environment where I can learn continuously, solve
            complex problems, and collaborate with colleagues to create
            meaningful solutions.
          </p>
        </section>
        <section className="flex flex-col gap-4 max-w-3xl px-4 sm:px-0">
          <h2 className="mx-auto sm:ml-0 sm:mr-auto text-xl font-semibold">
            Experience
          </h2>
          <ul className="list-disc list-inside">
            <li>Full Stack Engineer | DonDot, Inc. | 10/2024 - Present</li>
            <li>Front-end Engineer | Lightblue, Inc. | 04/2024 - Present</li>
            <li>Front-end Engineer | METATEAM, Inc. | 03/2023 - 10/2024</li>
            <li>Front-end Engineer | GACCI, Inc. | 12/2022 - 01/2024</li>
            <li>Full Stack Engineer | Keywalker, Inc. | 09/2021 - 02/2023</li>
            <li>Front-end Engineer | Genmitsu, Inc. | 06/2021 - 01/2022</li>
            <li>
              Programming Study | Learn Basic Coding Skill | 10/2020 - 05/2021
            </li>
            <li>Salesperson | 04/2017 - 09/2020</li>
          </ul>
        </section>
        <section className="flex flex-col gap-4 max-w-3xl px-4 sm:px-0">
          <h2 className="mx-auto sm:ml-0 sm:mr-auto text-xl font-semibold">
            Skill
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Front-end: React, Next, Typescript, JavaScript, Material UI,
              shadcn/ui, tanstack-query
            </li>
            <li>Back-end: Node.js, SQL, Rust</li>
            <li>DB: MySQL, No SQL</li>
            <li>Platform: Notion, GitHub, Figma, Backlog, Jira</li>
          </ul>
        </section>
      </div>
      <section className="flex flex-col gap-4">
        <h2 className="mx-auto text-xl font-semibold">Technologies</h2>
        <div className="bg-primary-25 dark:bg-primary-800 p-8 grid grid-cols-2 gap-6 sm:justify-evenly sm:flex sm:items-center">
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
