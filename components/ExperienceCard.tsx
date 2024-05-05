import { urlFor } from "@/sanity";
import experience from "@/schemaTypes/experience";
import { Experience } from "@/typings";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 mt-14 md:mt-0 lg:mt-0 xl:mt-0 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        //src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/online-blog.jpg"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="text-lg font-bold md:text-2xl lg:text-2xl xl:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-0">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}

          {/* <img
            className="h-10 w-10 rounded-full"
            src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/java-script_1199124.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/java-script_1199124.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/java-script_1199124.png"
            alt=""
          /> */}
        </div>
        {/*<p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>*/}
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 text-sm md:space-y-4 lg:space-y-4 xl:space-y-4 ml-5 md:text-lg lg:text-lg xl:text-lg h-96 overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
