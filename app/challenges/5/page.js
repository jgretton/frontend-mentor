import Image from "next/image";
import React from "react";

import MobileImage from "@/public/images/challenges/5/image-product-mobile.jpg";
import DesktopImage from "@/public/images/challenges/5/image-product-desktop.jpg";

const page = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-[hsl(30,38%,92%)] px-4">
      <article className="sm:rounded- mt-10 flex max-w-2xl flex-col overflow-hidden rounded-2xl bg-white sm:flex-row sm:items-center sm:justify-center">
        <figure className="sm:w-1/2">
          <Image src={MobileImage} alt="" className="block sm:hidden" />
          <Image src={DesktopImage} alt="" className="hidden sm:block" />
        </figure>
        <section className="p-5 sm:w-1/2 sm:p-7">
          <span className="text-sm tracking-[0.2rem] text-gray-400">
            PERFUME
          </span>
          <h2 className="mt-4 text-4xl font-bold">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="mt-6 tracking-wide text-gray-500">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="mt-6 flex items-center gap-5">
            <p className="text-4xl font-semibold text-[rgba(79,128,106,1)]">
              $149.99
            </p>
            <p className="text-sm text-gray-400 line-through">$169.99</p>
          </div>

          <button className="mt-6 inline-flex w-full items-center justify-center gap-x-4 rounded-lg bg-[rgba(79,128,106,1)] py-4 font-semibold text-white transition-colors hover:bg-[rgba(36,63,50,1)]">
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
            Add to cart
          </button>
        </section>
      </article>
    </main>
  );
};

export default page;
