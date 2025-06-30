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
    title: "My Journey",
    content: (
      <>
        I completed my B.Sc. in CSE from <strong>North South University</strong>
        . I started my career at <strong>SEBPO</strong> as an Executive, but
        soon transitioned to software development through{" "}
        <strong>Programming Hero</strong>, where I learned the MERN stack and
        found my true passion.
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
    <section className="relative overflow-hidden py-8 px-6">
      <div className="w-11/12 mx-auto">
        {/* Decorative background with reduced opacity */}
        <div className="absolute inset-0 opacity-5 -z-10 bg-[radial-gradient(circle_at_80%_80%,#219EBC_0%,transparent_30%)]"></div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#219EBC] mb-4">About Me</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A glimpse into my journey, my passion for development, and the
            values I bring as a developer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 mx-auto">
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
                ref={ref}
                style={animation}
                key={card.title}
                className="bg-[#0f172a]/70 rounded-xl p-6 shadow-md hover:shadow-xl transition backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  {card.icon}
                  <h3 className="text-xl font-semibold text-[#219EBC]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm">{card.content}</p>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
