import { useParams, useNavigate, useLoaderData } from "react-router";
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetails = () => {
  const projects = useLoaderData();
  console.log(projects);
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="text-center text-white mt-10">Project not found.</p>;
  }

  const imageList = Array.isArray(project.image)
    ? project.image
    : [project.image];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 py-12 text-white bg-[#0f172a]/60"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-cyan-400 hover:underline"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">{project.title}</h1>

      {/* Short Description */}
      <p className="text-gray-300 text-lg mb-6">{project.shortDescription}</p>

      {/* Swiper Image Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg overflow-hidden border border-cyan-700 mb-8"
      >
        {imageList.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Screenshot ${idx + 1}`}
              className="w-full object-cover h-[300px] lg:h-[450px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Purpose */}
      {project.purpose && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
            Overview
          </h2>
          <p className="text-gray-300">{project.purpose}</p>
        </div>
      )}

      {/* Features */}
      {project.features && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.features.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-cyan-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Challenges */}
      {project.challenges && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
            Challenges
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Future Plans */}
      {project.futurePlans && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
            Future Plans
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.futurePlans.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-4 mt-6">
        {project.clientSite && (
          <a
            href={project.clientSite}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-600 hover:text-white transition"
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
            className="flex items-center gap-2 border border-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-600 hover:text-white transition"
          >
            <FaGithub /> View Github Server
          </a>
        )}
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border border-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-600 hover:text-white transition"
        >
          <FaExternalLinkAlt /> Live Website
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
