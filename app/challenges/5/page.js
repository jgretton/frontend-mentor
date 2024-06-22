import Image from "next/image";
import React from "react";

import MobileImage from "@/public/images/challenges/5/image-product-mobile.jpg";
import DesktopImage from "@/public/images/challenges/5/image-product-desktop.jpg";

const page = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-[hsl(30,38%,92%)] px-4">
      <article className="mt-10 rounded-lg bg-white">
        <figure>
          <Image src={MobileImage} alt="" className="" />
        </figure>
        <section className="p-5">
          <span>PERFUME</span>
          <h2 className="text-4xl font-bold">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="tracking-wide text-gray-500">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="flex items-center gap-5">
            <p className="text-4xl font-semibold">$149.99</p>
            <p className="text-sm text-gray-400 line-through">$169.99</p>
          </div>

          <button>Add to cart</button>
        </section>
      </article>
    </main>
  );
};

export default page;
