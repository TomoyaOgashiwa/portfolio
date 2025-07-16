import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-8">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex gap-6 justify-center items-center">
          <Link
            target="_blank"
            rel="noreferrer"
            href={"https://www.facebook.com/tomoya.ogashiwa"}
          >
            <Image
              src={"/facebook.svg"}
              width={32}
              height={32}
              alt="facebook"
              className="dark:bg-white rounded-md"
            />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/TomoyaOgashiwa"}
          >
            <Image
              src={"/github.svg"}
              width={32}
              height={32}
              alt="github"
              className="dark:bg-white rounded-md"
            />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={"https://x.com/tomoya07oga"}
          >
            <Image
              src={"/x.svg"}
              width={32}
              height={32}
              alt="x"
              className="dark:bg-white rounded-md"
            />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={"https://www.linkedin.com/in/tomoya-ogashiwa/"}
          >
            <Image
              src={"/linkedin.svg"}
              width={32}
              height={32}
              alt="linkedin"
              className="dark:bg-white rounded-md"
            />
          </Link>
        </div>
        <p className="text-sm dark:text-white">
          Copyright ©2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}
