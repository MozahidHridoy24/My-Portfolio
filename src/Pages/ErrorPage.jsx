import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router";
import animationData from "../assets/lottie-404.json";
import { FiArrowLeft } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 relative overflow-hidden">
      {/* Glow Circle Background Effect */}
      <div className=" absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#219EBC] opacity-20 rounded-full blur-[100px] -z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      {/* Lottie Animation */}
      <Player
        autoplay
        loop
        src={animationData}
        className="w-72 h-72 md:w-96 drop-shadow-xl "
      />

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8ECAE6] via-[#219EBC] to-[#023047] bg-clip-text text-transparent mb-4 animate-pulse py-2 ">
        Page Not Found
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
        Sorry, the page you were looking for doesn’t exist or may have been
        moved.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="btn btn-outline border-[#219EBC] text-white hover:bg-[#219EBC] hover:text-black transition px-6 py-2 text-lg animate-bounce flex items-center gap-2"
      >
        <FiArrowLeft className="text-xl" />
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
