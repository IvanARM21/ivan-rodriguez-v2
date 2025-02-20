import { twMerge } from "tailwind-merge";
import { GithubIcon } from "../icons/Github";
import { PreviewIcon } from "../icons/PreviewIcon";
import { motion } from "motion/react";
import type { Project } from "../interfaces/project.interface";

interface Props {
  project: Project;
  projectIndex: number;
}

export const ProjectItem = ({ project, projectIndex }: Props) => {
  return (
    <li className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-5 md:gap-10 pb-15 border-b border-zinc-200 last-of-type:border-0 last-of-type:pb-0">
      <div className="overflow-hidden w-full lg:w-1/2 rounded-2xl  h-full">
        <motion.img
          initial={{ opacity: 0, x: projectIndex % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          src={project.image}
          alt={`Image project ${project.title}`}
          className="rounded-2xl object-cover shadow-md"
        />
      </div>
      <div className=" flex flex-col w-full lg:w-1/2">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl font-title text-zinc-700 font-bold text-nowrap overflow-hidden"
        >
          {project.title}
        </motion.h3>
        <ul className="flex gap-4 mt-4 flex-wrap">
          {project.technologies.map(
            ({ name, icon: Icon, color }, technologyIndex) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 * technologyIndex }}
                viewport={{ once: true }}
                key={`${project.title}-${name}`}
                className={twMerge(
                  "text-zinc-50 font-medium bg-purple-600 px-3 py-1.5 text-sm  rounded-full flex gap-1.5 items-center",
                  color
                )}
              >
                <Icon className="size-5" />
                {name}
              </motion.li>
            )
          )}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:text-xl text-zinc-500 mt-6 flex-1"
        >
          {project.description}
        </motion.p>

        <div className="flex gap-4 mt-6">
          {project.codeLink ? (
            <>
              <motion.a
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                target="_blank"
                href={project.codeLink}
                className=" bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-full text-zinc-100 flex gap-2 items-center cursor-pointer"
              >
                <GithubIcon className="size-5" />
                Code
              </motion.a>
              <motion.a
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                target="_blank"
                href="https://landing-coffee-three.vercel.app/"
                className=" bg-indigo-100 hover:bg-indigo-200 transition-colors duration-300 px-4 py-2 rounded-full text-indigo-600 flex gap-2 items-center cursor-pointer"
              >
                <PreviewIcon className="size-5" />
                Preview
              </motion.a>
            </>
          ) : (
            <motion.a
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              target="_blank"
              href={project.previewLink}
              className=" bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-full text-zinc-100 flex gap-2 items-center cursor-pointer"
            >
              <PreviewIcon className="size-5" />
              Preview
            </motion.a>
          )}
        </div>
      </div>
    </li>
  );
};
