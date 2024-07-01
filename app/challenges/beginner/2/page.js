import Image from "next/image";
import React from "react";
import AvatarPhoto from "@/public/images/challenges/2/avatar-jessica.jpeg";

import Link from "next/link";

const links = [
  { name: "GitHub", href: "#" },
  { name: "Frontend Mentor", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
];

const page = () => {
  return (
    <main className="grid h-full min-h-screen place-items-center bg-black p-4">
      <article className="mx-auto w-full max-w-sm rounded-xl bg-[hsl(0,0%,12%)] p-6 text-white">
        <figure className="grid place-items-center">
          <h2 className="sr-only">Profile Information</h2>
          <Image
            src={AvatarPhoto}
            alt="Avatar photo for Jessica Randall"
            className="size-[5.5rem] rounded-full"
          />
          <figcaption className="mt-5 text-center">
            <p className="text-2xl font-semibold">Jessica Randall</p>
            <p className="text-Green mt-1 text-sm font-semibold">
              London, United Kingdom
            </p>
          </figcaption>
        </figure>

        <section className="mt-5 text-center">
          <h2 className="sr-only">Bio</h2>
          <p className="text-sm">"Front-end developer and avid reader."</p>
        </section>
        <section className="mt-5">
          <h2 className="sr-only">Social Links</h2>
          <ul className="flex w-full flex-col items-center gap-4">
            {links.map((link, index) => (
              <li key={index} className="w-full text-center">
                <Link
                  href={link.href}
                  role="button"
                  aria-label={`Link to ${link.name}`}
                  className="hover:bg-Green block w-full rounded-xl bg-[hsl(0,0%,20%)] py-4 text-center font-bold transition-colors hover:text-[hsl(0,0%,12%)]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default page;
