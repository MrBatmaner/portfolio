import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am Dmitry.❗️Capable of building websites and apps using React,
          JavaScript, and TypeScript. Skilled in development using ReactJS,
          TypeScript, Tailwind CSS, Next.js, Webpack, Stripe Checkout,
          Firestorm, Web-hooks, authentication systems, GraphQL, GPT-4, Drag &
          Drop functionality, TypeScript, Firebase, Appwrite Cloud, Zustand &
          Headless UI, OpenAI API, various CMS solutions, Redux, Google
          Autocomplete, and Expo. Experienced in debugging and merging code.
          Proficient in deploying applications on platforms such as Vercel,
          Netlify, AWS, and custom servers. Skilled in Git, including branching,
          pull requests, and merging. Experienced in utilizing Node Package
          Manager and managing servers on cPanel, AWS, and other cloud
          platforms. Proficient with CMS Sanity and knowledgeable in headless
          commerce architecture, including platforms such as Shopify, Netlify,
          and Sanity.io, as well as Heroku. Familiar with Docker for
          containerization.
        </p>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
