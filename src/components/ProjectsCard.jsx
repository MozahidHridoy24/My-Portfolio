import { motion } from "motion/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`w-full flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 bg-[#0f172a] border border-cyan-500 rounded-xl p-6 shadow-lg mb-12`}
    >
      {/* Image Column */}
      <div className="lg:w-1/2 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 lg:h-full object-cover rounded-lg border border-cyan-800"
        />
      </div>

      {/* Text Content Column */}
      <div className="lg:w-1/2 w-full flex flex-col justify-between">
        <div>
          {/* Title */}
          <h2 className="text-3xl font-bold mb-3">{project.title}</h2>

          {/* Full Description */}
          {project.shortDescription && (
            <p className="text-gray-400 mb-6">{project.shortDescription}</p>
          )}

          {/* Tech Section Title */}
          <h4 className="text-xl font-semibold text-cyan-400 mb-2">
            Technology
          </h4>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-cyan-700 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap gap-4 items-center">
          {project.clientSite && (
            <a
              href={project.clientSite}
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 hover:bg-cyan-600 hover:text-white transition px-4 py-2 rounded-md flex items-center gap-2 text-sm"
            >
              <FaGithub />
              View Github Client
            </a>
          )}

          {project.serverSite && (
            <a
              href={project.serverSite}
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 hover:bg-cyan-600 hover:text-white transition px-4 py-2 rounded-md flex items-center gap-2 text-sm"
            >
              <FaGithub />
              View Github Server
            </a>
          )}

          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 hover:bg-cyan-600 hover:text-white transition px-4 py-2 rounded-md flex items-center gap-2 text-sm"
          >
            View Project <FaExternalLinkAlt />
          </a>

          <Link
            to={`/projects/${project.id}`}
            className="ml-auto text-cyan-400 hover:underline text-sm"
          >
            See Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
