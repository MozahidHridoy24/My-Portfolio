import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaFutbol,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap className="text-2xl text-[#219EBC]" />,
    title: "My Career Objective",
    content: (
      <>
        I’m passionate about <strong>software engineering</strong>. I pursued a
        degree in <strong>Computer Science and Engineering</strong> and, over
        the last 6 months, have built several{" "}
        <strong>full-stack web applications</strong> using the{" "}
        <strong>MERN stack</strong>. My vision is to grow as a{" "}
        <strong>software engineer</strong> and make meaningful contributions
        through technology.
      </>
    ),

    from: "left",
  },
  {
    icon: <FaLaptopCode className="text-2xl text-[#219EBC]" />,
    title: "Why I Love Code",
    content:
      "I enjoy crafting elegant user experiences, solving problems, and building full-stack applications. I'm constantly learning and experimenting with new technologies to stay ahead in the ever-evolving tech landscape.",
    from: "right",
  },
  {
    icon: <FaCode className="text-2xl text-[#219EBC]" />,
    title: "Always Learning",
    content:
      "Whether it's mastering new frameworks, optimizing performance, or writing clean, scalable code — I strive to grow every day. I believe the best developers are always students first.",
    from: "left",
  },
  {
    icon: <FaFutbol className="text-2xl text-[#219EBC]" />,
    title: "Beyond Code",
    content:
      "When I’m not coding, you’ll find me on the cricket field or watching a thrilling football match. I value discipline, strategy, and teamwork — in sports and in code.",
    from: "right",
  },
];

const About = () => {
  return (
    <section className="py-2 px-4 w-11/12 mx-auto">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_80%_80%,#219EBC_0%,transparent_50%)]" />

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#219EBC] mb-3">About Me</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          A glimpse into my journey, my passion for development, and the values
          I bring as a developer.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {cards.map((card, idx) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          const animation = useSpring({
            from: {
              opacity: 0,
              transform: `translateX(${
                card.from === "left" ? "-50px" : "50px"
              })`,
            },
            to: {
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateX(0px)"
                : `translateX(${card.from === "left" ? "-50px" : "50px"})`,
            },
            config: { tension: 170, friction: 20 },
            delay: idx * 100,
          });

          return (
            <animated.div
              key={card.title}
              ref={ref}
              style={animation}
              className="bg-[#0f172a]/80 rounded-xl p-6 shadow hover:shadow-xl transition duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                {card.icon}
                <h3 className="text-xl font-semibold text-[#219EBC]">
                  {card.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {card.content}
              </p>
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
