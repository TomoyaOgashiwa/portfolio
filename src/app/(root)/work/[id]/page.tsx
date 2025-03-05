"use client";

import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const props = use(params);

  return <div>{props.id}</div>;
}
