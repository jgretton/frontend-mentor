import Link from "next/link";
import React from "react";

import { Verbal, Reaction, Memory, Visual } from "./svgs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Results = [
  {
    category: "Reaction",
    score: 80,
    icon: Reaction,
    colour: "red",
  },
  {
    category: "Memory",
    score: 92,
    icon: Memory,
    colour: "yellow",
  },
  {
    category: "Verbal",
    score: 61,
    icon: Verbal,
    colour: "green",
  },
  {
    category: "Visual",
    score: 72,
    icon: Visual,
    colour: "purple",
  },
];

const averageScore = (results) => {};

const page = () => {
  return (
    <main className="min-h-screen sm:grid sm:place-items-center">
      <article className="mx-auto flex w-full max-w-3xl flex-col sm:flex-row sm:rounded-[2.5rem] sm:shadow-2xl">
        <section className="flex w-full flex-col items-center justify-between gap-7 rounded-b-[2.5rem] bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] pb-10 pt-7 text-white sm:rounded-[2.5rem] sm:pt-10">
          <h1 className="text-2xl font-medium text-white/70">Your Result</h1>
          <div className="flex size-40 flex-col items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[hsl(241,81%,54%)] sm:size-52">
            <p className="text-5xl font-bold sm:text-6xl">76</p>
            <p className="text-white/50">of 100</p>
          </div>
          <div className="max-w-xs space-y-3 px-4 text-center">
            <p className="text-3xl font-semibold">Great </p>
            <p className="text-lg text-white/70">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="mt-8 w-full px-7 pb-10 pt-7 sm:m-0 sm:pt-10">
          <h2 className="text-xl font-semibold">Summary</h2>
          <ul className="mt-8 grid gap-4">
            {Results.map((result, index) => {
              const { icon: Icon, colour } = result;
              const colours = {
                red: "text-red-400 bg-red-400/10",
                yellow: "text-yellow-400 bg-yellow-400/10",
                green: "text-green-400 bg-green-400/10",
                purple: "text-blue-600 bg-blue-400/10",
              };
              return (
                <li
                  key={index}
                  className={`flex justify-between rounded-lg p-4 ${colours[colour]}`}
                >
                  <div className="">
                    <p className="text-g-600/70 inline-flex items-center gap-3 text-lg font-semibold">
                      <Icon className="size-5" />
                      {result.category}
                    </p>
                  </div>
                  <div className="">
                    <p className="font-semibold text-black">
                      {result.score}
                      <span className="text-black/60"> / 100</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link
            href={"#"}
            role="button"
            className="mt-6 block rounded-full bg-slate-700 from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] py-4 text-center text-xl font-semibold text-white transition-colors hover:bg-gradient-to-b"
          >
            Continue
          </Link>
        </section>
      </article>
    </main>
  );
};

export default page;
