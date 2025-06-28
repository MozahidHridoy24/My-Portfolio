import React from "react";
import ProjectCard from "../components/ProjectsCard";

const projectsData = [
  {
    id: "recipe-book",
    title: "🍽️ Recipe Book",
    shortDescription:
      "Your go-to platform to explore, share, and manage recipes from around the world!",
    liveLink: "https://recipe-book-24.surge.sh/",
    features: [
      "Browse Recipes by Cuisine: Filter and explore recipes by cuisine type like Italian, Mexican, Indian, and more.",
      "Theme Toggle: Switch between multiple themes (light, dark, cupcake, etc.) using DaisyUI integration.",
      "Image Upload & Recipe Creation: Add new recipes with images, ingredients, instructions, and categories.",
      "Responsive Design: Fully mobile-responsive and styled with Tailwind CSS and DaisyUI.",
      "Top Recipes Section: Automatically displays top liked recipes on the homepage.",
      "Authentication: Secure login and registration using Firebase Authentication (Email/Password + Google).",
      "Like System: Users can like and engage with recipes they enjoy.",
      "Lottie Animations & Typewriter Effects: Enhanced UI with modern animations and text transitions.",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Express",
      "Firebase Authentication",
      "React Router",
      "React Tooltip",
      "React Simple Typewriter",
    ],
    clientSite: "https://github.com/MozahidHridoy24/Recipe-Book-Client",
    serverSite: "https://github.com/MozahidHridoy24/Recipe-Book-Server",
    image: "https://i.ibb.co/xtGnd06w/Screenshot-2025-06-29-012734.png",
    challenges: [
      "Integrating image upload with form data and storing it properly.",
      "Managing authentication flow with both Google and Email/Password securely.",
      "Creating a real-time like system without refreshing the page.",
    ],
    futurePlans: [
      "Add user comments and reviews for each recipe.",
      "Include nutritional information based on ingredients.",
      "Add profile pages where users can see their own recipes and likes.",
    ],
  },
  {
    id: "careertrack",
    title: "💼 CareerTrack",
    shortDescription:
      "CareerTrack is a modern and responsive job portal platform designed to connect job seekers with top companies across various industries.",
    liveLink: "https://career-track-24.surge.sh/",
    features: [
      "User Authentication (Email/Password & Google Login)",
      "Job Listings with Filters and Categories",
      "Company Profiles and Featured Employers",
      "Success Metrics with CountUp Animations",
      "Lottie Animations for enhanced UI",
      "Dashboard for Users",
      "Forgot Password Functionality",
      "Responsive Design",
      "Styled with Tailwind CSS",
      "Reusable Components",
    ],
    techStack: [
      "React 19.1.0",
      "React DOM 19.1.0",
      "React Router 7.6.1",
      "Firebase 11.8.1",
      "Tailwind CSS 4.1.8",
      "@tailwindcss/vite 4.1.8",
      "React Icons 5.5.0",
      "Lottie React 2.4.1",
      "React CountUp 6.5.3",
      "@react-spring/web 10.0.1",
      "Motion 12.15.0",
      "Sweet Alert 11.22.0",
    ],
    clientSite: "https://github.com/MozahidHridoy24/Career-Track",
    serverSite: null,
    image: "https://i.ibb.co/JFcDq9PY/Screenshot-2025-06-29-015227.png",
    purpose:
      "The goal of CareerTrack is to simplify the job search process for professionals while giving employers a streamlined way to post openings and connect with talent. The platform supports user registration, job listings, company showcases, and more — all built with a modern frontend stack.",
    challenges: [
      "Integrating secure Firebase Authentication with Email and Google",
      "Building reusable and responsive UI components",
      "Managing user dashboards and protected routes effectively",
    ],
    futurePlans: [
      "Add Resume Upload & PDF Viewer",
      "Implement Role-based Dashboards (Admin, Employer, Seeker)",
      "Integrate Chat System for Employer-Applicant Communication",
    ],
  },
];
const Projects = () => {
  return (
    <section className="px-6 lg:px-20 py-12 bg-base-100 w-11/12 mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      {projectsData.map((project, idx) => (
        <ProjectCard
          key={project.id}
          project={project}
          reverse={idx % 2 === 1} // Reverse layout for every 2nd project
        />
      ))}
    </section>
  );
};
export default Projects;
