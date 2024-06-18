import Link from "next/link";
import React from "react";
const Results = [
  {
    category: "Reaction",
    score: 80,
    icon: "./icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./icon-visual.svg",
  },
];

const averageScore = (results) => {};

const page = () => {
  return (
    <main>
      <article className="">
        <section className="flex flex-col items-center justify-center gap-7 rounded-b-[2.5rem] bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] pb-10 pt-7 text-white">
          <h2 className="text-2xl font-medium text-white/70">Your Result</h2>
          <div className="flex size-36 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[hsl(241,81%,54%)]">
            <p className="text-5xl font-bold">76</p>
            <p className="text-white/50">of 100</p>
          </div>
          <div className="max-w-xs space-y-3 text-center">
            <p className="text-3xl font-semibold">Great </p>
            <p className="text-lg text-white/70">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="mt-8 px-7">
          <h2 className="text-xl font-semibold">Summary</h2>
          <ul className="mt-8 grid gap-4">
            {Results.map((result, index) => {
              const { icon: Icon } = result;
              return (
                <li
                  key={index}
                  className="flex justify-between rounded-lg bg-red-100/70 p-4"
                >
                  <div className="">
                    <p className="text-lg font-semibold text-red-600/70">
                      <Icon className="size-4" />
                      {result.category}
                    </p>
                  </div>
                  <div className="">
                    <p className="font-semibold">
                      {result.score}{" "}
                      <span className="text-black/60"> / 100</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link href={"#"} role="button">
            Continue
          </Link>
        </section>
      </article>
    </main>
  );
};

export default page;
