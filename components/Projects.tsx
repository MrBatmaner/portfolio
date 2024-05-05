import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  //const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase text-gray-500 tracking-[10px] md:tracking-[20px] lg:tracking-[20px] xl:tracking-[20px] text-xl md:text-2xl lg:text-2xl xl:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Link key={project._id} href={project.linkToBuild}>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                //src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/goobye-3250201_640.png"
                alt="projects"
                //layout="size"
                src={urlFor(project?.image).url()}
                className="-mb-20 object-contain h-[350px] mt-2 p-1 py-5 w-[500px] md:mt-0 md:p-0 lg:mt-0 lg:p-0 xl:mt-0 xl:p-0 md:mb-0 flex-shrink-0 rounded-full md:rounded-lg xl:w-[500px] xl:h-[300px] cursor-pointer"
              />
            </Link>

            <div className="px-0 md:space-y-0 xl:space-y-0 md:px-10 max-w-6xl">
              <h4 className="text-xl mt-1 md:text-4xl xl:text-4xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="p-0 md:p-1 lg:p-1 xl:p-1 flex items-center">
                {project?.technologies?.map((technology) => (
                  <img
                    className="h-10 w-10 p-1 mb-1 md:h-15 md:w-15 md:mb-2 xl:h-20 xl:w-20 xl:mb-2"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-sm md:text-lg lg:text-lg xl:text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
          </div>
        ))}
        {/* projects */}
        {/* projects */}
        {/* projects */}
      </div>

      <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
