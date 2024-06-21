import Link from "next/link";

const links = [
  { name: "Challenge 1 - Receipe page", href: "/challenges/1" },
  { name: "Challenge 2 - Social links profile", href: "/challenges/2" },
  { name: "Challenge 3 - FAQ accordian", href: "/challenges/3" },
  { name: "Challenge 4 - Results summary component", href: "/challenges/4" },
  {
    name: "Challenge 5 - Product preview card component",
    href: "/challenges/5",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link className="" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
