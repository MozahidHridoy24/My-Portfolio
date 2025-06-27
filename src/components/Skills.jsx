import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiPostman,
  SiVercel,
  SiReactquery,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Vite", icon: <SiVite />, color: "#FFD62E" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFA611" },
  ],
  Tools: [
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Vercel", icon: <SiVercel />, color: "#000000" },
    { name: "React Query", icon: <SiReactquery />, color: "#FF4154" },
    { name: "Database", icon: <FaDatabase />, color: "#4DB33D" },
  ],
};

const SkillItem = ({ icon, name, color, delay }) => (
  <motion.div
    className="flex flex-col items-center gap-2 p-4 bg-base-200 rounded-lg shadow hover:shadow-md hover:scale-105 transition"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="text-3xl" style={{ color }}>
      {icon}
    </div>
    <p className="text-sm font-medium text-center text-slate-700 dark:text-slate-200">
      {name}
    </p>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-base-100">
      <h2 className="text-4xl font-bold text-center text-[#219EBC] mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Each category box */}
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            className="bg-base-200 p-6 rounded-xl shadow-xl hover:shadow-2xl border border-base-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-slate-800 dark:text-slate-100">
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skillList.map((skill, idx) => (
                <SkillItem key={skill.name} {...skill} delay={0.05 * idx} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
