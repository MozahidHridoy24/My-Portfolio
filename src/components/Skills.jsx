import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaJsSquare,
  FaLock,
  FaServer,
  FaCode,
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
  SiGit,
  SiNetlify,
  SiFramer,
  SiPicardsurgeles,
} from "react-icons/si";

// Grouped skill data
const skills = [
  {
    label: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#FF5722" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#339AF0" },
      { name: "JavaScript", icon: <FaJsSquare />, color: "#FFD700" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#66E2DC" },
      { name: "React", icon: <FaReact />, color: "#80DEEA" },
      { name: "Vite", icon: <SiVite />, color: "#FBC02D" },
      { name: "Framer Motion", icon: <SiFramer />, color: "#E1F5FE" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#90EE90" },
      { name: "Express.js", icon: <SiExpress />, color: "#CCCCCC" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#A2FF86" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFD180" },
      { name: "JWT", icon: <FaLock />, color: "#FFAB91" },
      { name: "REST API", icon: <FaServer />, color: "#B2EBF2" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: <SiGit />, color: "#F1502F" },
      { name: "GitHub", icon: <FaGithub />, color: "#E0E0E0" },
      { name: "Figma", icon: <FaFigma />, color: "#FF80AB" },
      { name: "Postman", icon: <SiPostman />, color: "#FFAB91" },
      { name: "Vercel", icon: <SiVercel />, color: "#E0E0E0" },
      { name: "Netlify", icon: <SiNetlify />, color: "#38E2E2" },
      { name: "Surge", icon: <SiPicardsurgeles />, color: "#9E9E9E" },
      { name: "React Query", icon: <SiReactquery />, color: "#FF8A80" },
      { name: "VS Code", icon: <FaCode />, color: "#03A9F4" },
    ],
  },
];

// Marquee animation config
const marqueeVariants = {
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 120, // Slower speed
      ease: "linear",
    },
  },
};

const Skills = () => {
  const combined = skills.flatMap((group, idx) => [
    {
      type: "label",
      label: group.label,
      key: `label-${group.label}-${idx}`,
    },
    ...group.items.map((skill, i) => ({
      ...skill,
      type: "icon",
      key: `icon-${group.label}-${i}`,
    })),
  ]);

  const fullList = [
    ...combined,
    ...combined.map((item, i) => ({
      ...item,
      key: item.key + "-dup-" + i,
    })),
  ];

  return (
    <section className="py-12 flex items-center justify-center w-11/12 mx-auto overflow-hidden">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center text-[#219EBC] mb-4">
          My Skills
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-300 mb-12">
          I specialize in building full-stack web applications using modern
          technologies. My expertise spans frontend development with React and
          Tailwind CSS, to robust backend systems using Node.js, Express.js and
          MongoDB. I also work with powerful tools like Firebase, Vercel, and
          GitHub for hosting, authentication, and deployment. I’m always
          exploring new technologies to improve performance, user experience,
          and scalability.
        </p>

        <div className="relative w-full h-[200px] overflow-hidden">
          <motion.div
            className="flex gap-6 w-max absolute py-20"
            variants={marqueeVariants}
            animate="animate"
          >
            {fullList.map((item, i) =>
              item.type === "label" ? (
                <div
                  key={item.key}
                  className="flex items-center justify-center px-6 text-xl font-bold text-white bg-[#219EBC] rounded-lg min-w-[160px]"
                >
                  {item.label}
                </div>
              ) : (
                <div
                  key={item.key}
                  className="flex flex-col items-center gap-2 bg-[#0f172a]/60 rounded-lg p-4 shadow text-white min-w-[120px]"
                >
                  <div className="text-4xl" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-center">{item.name}</p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
