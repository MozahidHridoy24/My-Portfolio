import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import myImage from "../assets/mozahid.jpg";

const Banner = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 bg-[#0f172a]">
      {/* Left content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-[#219EBC]">Mozahidul Islam Hridoy</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
          MERN Stack Web Developer
        </h2>
        <p className="text-base md:text-lg mb-6 max-w-xl text-slate-300">
          Passionate about delivering clean, efficient, and impactful web
          applications using modern technologies like React, Node.js,
          Express.js, MongoDB and Tailwind CSS.
        </p>

        {/* Resume Button */}
        <div className="mb-6">
          <a
            href="/src/assets/MD.-MOZAHIDUL-ISLAM-Resume.pdf" // replace with your resume URL or file
            download
            className="btn btn-primary bg-[#219EBC]"
          >
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start text-2xl">
          <a
            href="https://github.com/MozahidHridoy24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transform transition duration-300 hover:scale-125 hover:text-[#219EBC]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mozahidul-islam-hridoy-118576228/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transform transition duration-300 hover:scale-125 hover:text-[#219EBC]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transform transition duration-300 hover:scale-125 hover:text-[#219EBC]"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 mb-8 lg:mb-0 flex justify-center">
        <img
          src={myImage} // replace with your photo
          alt="Mozahid"
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-6 border-[#219EBC]"
        />
      </div>
    </section>
  );
};

export default Banner;
