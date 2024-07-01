import Link from "next/link";

const beginnerLinks = [
  { name: "Challenge 1 - Receipe page", href: "/challenges/beginner/1" },
  {
    name: "Challenge 2 - Social links profile",
    href: "/challenges/beginner/2",
  },
  { name: "Challenge 3 - FAQ accordian", href: "/challenges/beginner/3" },
  {
    name: "Challenge 4 - Results summary component",
    href: "/challenges/beginner/4",
  },
  {
    name: "Challenge 5 - Product preview card component",
    href: "/challenges/beginner/5",
  },
];

const juniorLinks = [
  {
    name: "Challenge 1 - Mortgage repayment calculator",
    href: "/challenges/junior/1",
  },
];
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col p-24">
      <h1 className="text-lg font-bold">Frontend Mentor Challenges</h1>
      <section className="mt-6">
        <h2 className="font-semibold">Beginner</h2>
        <ul className="mt-2">
          {beginnerLinks.map((link, index) => (
            <li key={index}>
              <Link className="" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">Junior</h2>
        <ul className="mt-2">
          {juniorLinks.map((link, index) => (
            <li key={index}>
              <Link className="" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
