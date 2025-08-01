import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const contactInfo = [
  {
    label: "Email",
    value: "hridoy1407@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:hridoy1407@gmail.com",
  },
  {
    label: "Phone",
    value: "+8801913959624",
    icon: <FaPhoneAlt />,
    link: "tel:+8801913959624",
  },
  {
    label: "WhatsApp",
    value: "+8801521217816",
    icon: <FaWhatsapp />,
    link: "https://wa.me/8801521217816",
  },
];

const ContactItem = ({ item, idx }) => {
  // useInView hook to detect visibility
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2, // 20% visible triggers animation
  });

  // Define initial transform based on index
  const getInitialTransform = () => {
    switch (idx) {
      case 0:
        return "translateX(-100px)";
      case 1:
        return "translateY(100px)";
      case 2:
        return "translateX(100px)";
      default:
        return "translateX(0)";
    }
  };

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0) translateY(0)" : getInitialTransform(),
    delay: idx * 300,
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      style={spring}
      className="flex flex-col items-center gap-4 p-6 bg-[#0f172a] rounded-xl shadow hover:shadow-xl transition hover:scale-105 text-center"
    >
      <div className="text-4xl text-[#219EBC]">{item.icon}</div>
      <div>
        <p className="font-semibold text-lg">{item.label}</p>
        <p className="text-sm">{item.value}</p>
      </div>
    </animated.a>
  );
};

const Contact = () => {
  return (
    <section className="py-12 px-6 md:px-16 text-slate-100">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#219EBC] mb-12">
          Contact Me
        </h2>

        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-3">
          {contactInfo.map((item, idx) => (
            <ContactItem key={item.label} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
