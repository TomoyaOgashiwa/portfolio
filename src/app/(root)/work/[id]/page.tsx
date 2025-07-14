"use client";

import { use } from "react";
import {
  CareerHistoryDetail,
  type CareerHistoryId,
} from "../../constants/constants";
import Image from "next/image";

export default function Page({
  params,
}: {
  params: Promise<{ id: CareerHistoryId }>;
}) {
  const props = use(params);

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto px-4 sm:px-0 dark:text-white">
      <h1>{CareerHistoryDetail[props.id].name}</h1>
      <p>{CareerHistoryDetail[props.id].abstraction}</p>
      <p>{CareerHistoryDetail[props.id].description}</p>
      <section id="achievements">
        <h2 className="text-xl font-semibold">Achievements</h2>
        <ul className="list-disc list-inside">
          {CareerHistoryDetail[props.id].achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>
      <section className="flex items-center gap-2" id="tech">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2 items-center">
          {CareerHistoryDetail[props.id].tech.map((tech) => (
            <li key={tech.alt}>
              <Image src={tech.image} alt={tech.alt} width={40} height={40} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
