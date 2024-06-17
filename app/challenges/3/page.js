"use client";

import React, { useState } from "react";
const FAQS = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Page = () => {
  //   const [isOpen, setIsOpen] = useState([]);

  //If I want the accordian items to be independent
  //I have filled an array with the FAQS length with the bool False.
  const [isOpen, setIsOpen] = useState(Array(FAQS.length).fill(false));

  return (
    <main className="relative min-h-screen bg-purple-200 px-6 py-40">
      <div
        className="bg-3-challenge-mobile md:bg-3-challenge-desktop absolute inset-0 h-80 bg-red-100"
        aria-hidden="true"
      />
      <article className="relative mx-auto h-full max-w-xl rounded-xl bg-white px-6 pb-2 pt-8 sm:pt-12">
        <h1 className="inline-flex items-center gap-x-6 text-5xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            fill="none"
            viewBox="0 0 40 41"
            className="flex-shrink-0"
            aria-hidden="true"
          >
            <path
              fill="#AD28EB"
              d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
            />
          </svg>
          FAQs
        </h1>
        <section className="mt- flex flex-col" role="region">
          {FAQS.map((faq, index) => {
            return (
              <details
                key={index}
                name="FAQs"
                className="border-b py-6 last:border-none [&>summary>svg#minus-svg]:open:block [&>summary>svg#plus-svg]:open:hidden"
              >
                <summary
                  className="inline-flex w-full cursor-pointer items-center justify-between gap-x-20 text-left text-lg font-semibold text-Dark-purple hover:text-[#AD28EB]"
                  //   onClick={() =>
                  //     setIsOpen((prevState) => {
                  //       //This allows for the accodian items to be independent of each other by keeping the previous values of the state
                  //       return { ...prevState, [index]: !isOpen[index] };
                  //     })
                  //   }
                >
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    fill="none"
                    viewBox="0 0 30 31"
                    className="flex-shrink-0"
                    aria-hidden="true"
                    id="plus-svg"
                  >
                    <path
                      fill="#AD28EB"
                      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    fill="none"
                    viewBox="0 0 30 31"
                    className="hidden flex-shrink-0"
                    aria-hidden="true"
                    id="minus-svg"
                  >
                    <path
                      fill="#301534"
                      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                    />
                  </svg>
                </summary>
                <p className="mt-5 text-Grayish-purple">{faq.answer}</p>
              </details>
              // <section key={index} className="border-b py-6 last:border-none">
              //   <h2>
              //     <button
              //       id={`accordion-header-${index + 1}`}
              //       aria-controls={`accordion-panel-${index + 1}`}
              //       aria-expanded={isOpen[index]}
              //       role="button"
              //       onClick={() =>
              //         setIsOpen((prevState) => {
              //           //This allows for the accodian items to be independent of each other by keeping the previous values of the state
              //           return { ...prevState, [index]: !isOpen[index] };
              //         })
              //       }
              //       className="inline-flex w-full items-center justify-between gap-x-20 text-left text-lg font-semibold text-Dark-purple hover:text-[#AD28EB]"
              //     >
              //       {faq.question}
              //       {!isOpen[index] ? (
              //         <svg
              //           xmlns="http://www.w3.org/2000/svg"
              //           width="30"
              //           height="31"
              //           fill="none"
              //           viewBox="0 0 30 31"
              //           className="flex-shrink-0"
              //           aria-hidden="true"
              //         >
              //           <path
              //             fill="#AD28EB"
              //             d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
              //           />
              //         </svg>
              //       ) : (
              //         <svg
              //           xmlns="http://www.w3.org/2000/svg"
              //           width="30"
              //           height="31"
              //           fill="none"
              //           viewBox="0 0 30 31"
              //           className="flex-shrink-0"
              //           aria-hidden="true"
              //         >
              //           <path
              //             fill="#301534"
              //             d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
              //           />
              //         </svg>
              //       )}
              //     </button>
              //   </h2>
              //   <div
              //     className="max-h-auto mt-5"
              //     role="region"
              //     hidden={!isOpen[index]}
              //     id={`accordion-panel-${index + 1}`}
              //     aria-labelledby={`accordion-header-${index + 1}`}
              //   >
              //     <p className="text-Grayish-purple">{faq.answer}</p>
              //   </div>
              // </section>
            );
          })}
        </section>
      </article>
    </main>
  );
};

export default Page;
