import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="py-20 mt-10 border-t border-zinc-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-12">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="sm:text-lg text-zinc-600 font-medium"
          >
            &copy; {new Date().getFullYear()} Iván Rodríguez.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-10">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-zinc-700 text-2xl mb-6 font-bold font-title">
                Elsewhere
              </h3>
              <ul className="flex flex-col gap-4 text-indigo-700">
                <li>
                  <a href="" className="text-zinc-500 font-medium">
                    Github
                  </a>
                </li>
                <li>
                  <a href="" className="text-zinc-500 font-medium">
                    Linkedin
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-zinc-700 text-2xl mb-6 font-bold font-title">
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="mailto:ivanrms371@gmail.com"
                    className="text-zinc-500 font-medium"
                  >
                    ivanrms371@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="sms:+59899612953"
                    className="text-zinc-500 font-medium"
                  >
                    + 598 99 612 953
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
