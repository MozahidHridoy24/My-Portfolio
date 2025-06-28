import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProjectDetails from "../Pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/projects-details/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: () => fetch("/projectData.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
