"use client";

import Button from "../button";

interface Props {
  fileLink: string;
  filename: string;
}

export default function Download({ fileLink, filename }: Props) {
  const handleDownload = () => {
    console.log("downloading");
    const link = document.createElement("a");
    link.href = fileLink;
    link.download = filename; // Optionally, set a different file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button
      onClick={handleDownload}
      className="max-md:mx-auto w-fit"
      label="Download Resume"
    />
  );
}
