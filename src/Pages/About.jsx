import { motion } from "motion/react";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaFutbol,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-base-200 py-12 px-6 md:px-20 ">
      <div className="w-11/12 mx-auto">
        {/* Background Element (optional decoration) */}
        <div className="absolute inset-0 opacity-10 -z-10 bg-[radial-gradient(circle_at_20%_20%,#219EBC_0%,transparent_30%)] dark:bg-[radial-gradient(circle_at_80%_80%,#219EBC_0%,transparent_30%)]"></div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#219EBC] mb-4">About Me</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            A glimpse into my journey, my passion for development, and the
            values I bring as a developer.
          </p>
        </div>

        {/* About Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto ">
          {/* Education & Career */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className=" rounded-xl p-6 shadow-md hover:shadow-xl transition bg-[#0f172a]"
          >
            <div className="flex items-center gap-4 mb-4 text-[#219EBC]">
              <FaGraduationCap className="text-2xl" />
              <h3 className="text-xl font-semibold">My Journey</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              I completed my B.Sc. in CSE from{" "}
              <strong>North South University</strong>. I started my career at{" "}
              <strong>SEBPO</strong> as an Executive, but soon transitioned to
              software development through <strong>Programming Hero</strong>,
              where I learned the MERN stack and found my true passion.
            </p>
          </motion.div>

          {/* Developer Passion */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#0f172a] rounded-xl p-6 shadow-md hover:shadow-xl transition "
          >
            <div className="flex items-center gap-4 mb-4 text-[#219EBC]">
              <FaLaptopCode className="text-2xl" />
              <h3 className="text-xl font-semibold">Why I Love Code</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              I enjoy crafting elegant user experiences, solving problems, and
              building full-stack applications. I'm constantly learning and
              experimenting with new technologies to stay ahead in the
              ever-evolving tech landscape.
            </p>
          </motion.div>

          {/* Learning Attitude */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0f172a] rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4 text-[#219EBC]">
              <FaCode className="text-2xl" />
              <h3 className="text-xl font-semibold">Always Learning</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Whether it's mastering new frameworks, optimizing performance, or
              writing clean, scalable code — I strive to grow every day. I
              believe the best developers are always students first.
            </p>
          </motion.div>

          {/* Hobbies & Personality */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#0f172a] rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4 text-[#219EBC]">
              <FaFutbol className="text-2xl" />
              <h3 className="text-xl font-semibold">Beyond Code</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              When I’m not coding, you’ll find me on the cricket field or
              watching a thrilling football match. I value discipline, strategy,
              and teamwork — in sports and in code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
