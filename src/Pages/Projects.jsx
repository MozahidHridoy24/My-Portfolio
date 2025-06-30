import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectsCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projectData.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <section className="px-6  py-8 ">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#219EBC]">
          Projects
        </h1>
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={idx % 2 === 1} // Reverse layout for every 2nd project
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;
