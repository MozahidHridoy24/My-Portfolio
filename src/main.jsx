import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import VantaBackground from "./components/VantaBackground.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <VantaBackground></VantaBackground>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
