import { GithubIcon } from "../icons/Github";
import { Lightning } from "../icons/Lightning";
import { LinkedinIcon } from "../icons/Linkedin";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section
      className="min-h-[calc(100vh-96px)] pt-24 flex justify-center items-center"
      id="about"
    >
      <div className="container w-full px-4">
        <div className="max-w-5xl relative mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 1.25 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-indigo-600/40 size-8 sm:size-14 absolute right-0 top-80 sm:top-64"
          >
            <Lightning />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 1.25 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-indigo-600/40 size-8 sm:size-14 absolute left-0 max-sm:top-80  sm:bottom-[400px]"
          >
            <Lightning />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-center font-bold font-title text-zinc-300 mx-auto">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="block"
            >
              Hi I'm Iván,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="block"
            >
              a Frontend Developer
              <span className="text-indigo-600">.</span>
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 rounded-full bg-indigo-600/60 mx-auto my-6"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium mx-auto text-center"
          >
            I'm passionate about crafting amazing user experience, accesibles,
            and beautifuls
          </motion.p>

          <div className="flex flex-col gap-8 items-center justify-center mt-10">
            <motion.button
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              type="button"
              className="bg-indigo-600 text-white py-3 px-6 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
            >
              Download CV
            </motion.button>
            <div className="flex gap-8">
              <motion.a
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                target="_blank"
                aria-label="My Github Account"
                href="https://github.com/IvanARM21"
              >
                <GithubIcon className="size-7 fill-zinc-400 hover:scale-125 transition-all duration-300" />
              </motion.a>
              <motion.a
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                target="_blank"
                aria-label="My Linkedin Account"
                href="https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-moreira-b9848628b/"
              >
                <LinkedinIcon className="size-7 fill-zinc-400 hover:scale-125 transition-all duration-300" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
