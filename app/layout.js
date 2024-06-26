import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor Challenges",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 max-w-7xl mx-auto">
          <Link href={"/"}>Home</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
