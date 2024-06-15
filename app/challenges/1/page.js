import React from "react";
import OmelettePhoto from "@/public/images/challenges/1/image-omelette.jpeg";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-Eggshell sm:py-10">
      <article className="mx-auto max-w-3xl bg-white py-8 sm:rounded-3xl">
        <figure className="sm:px-8">
          <Image
            src={OmelettePhoto}
            alt="Photo of an omelette on a plate"
            className="h-full w-full object-cover sm:rounded-2xl"
          />
        </figure>
        <header className="mt-8 px-8">
          <h1 className="text-4xl"> Simple Omelette Recipe</h1>
          <p className="mt-8 text-base">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </header>

        <section className="mx-8 mt-8 rounded-2xl bg-Rose-White p-6">
          <h2 className="text-xl font-semibold text-Dark-Raspberry">
            Preparation time
          </h2>
          <ul className="mt-5 grid list-disc gap-4 pl-5 text-Wenge-Brown marker:text-Dark-Raspberry">
            <li className="pl-6">
              <strong className="text-Dark-Charcoal">Total</strong>:
              Approximately 10 minutes
            </li>
            <li className="pl-6">
              <strong className="text-Dark-Charcoal">Preparation</strong>: 5
              minutes
            </li>
            <li className="pl-6">
              <strong className="text-Dark-Charcoal">Cooking</strong>: 5 minutes
            </li>
          </ul>
        </section>

        <section className="mt-8 px-8">
          <h2 className="text-3xl text-Nutmeg">Ingredients</h2>
          <ul className="mt-5 grid list-disc gap-4 pl-6 text-Wenge-Brown marker:text-Dark-Raspberry">
            <li className="pl-6">2-3 large eggs</li>
            <li className="pl-6">Salt, to taste</li>
            <li className="pl-6">Pepper, to taste</li>
            <li className="pl-6">1 tablespoon of butter or oil</li>
            <li className="pl-6">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>

        <hr className="mx-8 my-8 text-Light-Grey" />

        <section className="px-8">
          <h2 className="text-3xl text-Nutmeg">Instructions</h2>
          <ol className="mt-8 grid list-decimal gap-4 pl-6 text-Wenge-Brown marker:pr-4 marker:text-Dark-Raspberry">
            <li className="pl-6">
              <strong className="text-Dark-Charcoal">Beat the eggs</strong>: In
              a bowl, beat the eggs with a pinch of salt and pepper until they
              are well mixed. You can add a tablespoon of water or milk for a
              fluffier texture.
            </li>

            <li className="pl-6">
              <strong className="text-Dark-Charcoal">Heat the pan</strong>:
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>

            <li className="pl-6">
              <strong className="text-Dark-Charcoal">Cook the omelette</strong>:
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>

            <li className="pl-6">
              <strong className="text-Dark-Charcoal">
                Add fillings (optional)
              </strong>
              : When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>

            <li className="pl-6">
              <strong className="text-Dark-Charcoal">Fold and serve</strong>: As
              the omelette continues to cook, carefully lift one edge and fold
              it over the fillings. Let it cook for another minute, then slide
              it onto a plate.
            </li>

            <li className="pl-6">
              <strong className="text-Dark-Charcoal">Enjoy</strong>: Serve hot,
              with additional salt and pepper if needed.
            </li>
          </ol>
        </section>

        <hr className="mx-8 my-8 text-Light-Grey" />

        <section className="px-8">
          <h2 className="text-3xl text-Nutmeg">Nutrition</h2>
          <p className="mt-8 text-Wenge-Brown">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="mt-4 w-full">
            <tbody className="divide-y divide-Light-Grey">
              <tr className="w-full">
                <th className="w-1/2 py-4 pl-10 text-start font-normal text-Wenge-Brown">
                  Calories
                </th>
                <td className="w-1/2 pl-0 font-bold text-Nutmeg">277kcal</td>
              </tr>
              <tr className="">
                <th className="py-4 pl-10 text-start font-normal text-Wenge-Brown">
                  Carbs
                </th>
                <td className="pl-0 font-bold text-Nutmeg">0g</td>
              </tr>
              <tr className="">
                <th className="py-4 pl-10 text-left font-normal text-Wenge-Brown">
                  Protein
                </th>
                <td className="text-left font-bold text-Nutmeg">20g</td>
              </tr>
              <tr className="">
                <th className="py-4 pl-10 text-start font-normal text-Wenge-Brown">
                  Fat
                </th>
                <td className="pl-0 font-bold text-Nutmeg">22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
};

export default page;
