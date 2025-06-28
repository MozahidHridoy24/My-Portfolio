import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

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

const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-16  text-slate-800 dark:text-slate-100">
      <h2 className="text-4xl font-bold text-center text-[#219EBC] mb-12">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-3">
        {contactInfo.map((item, idx) => (
          <motion.a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * idx }}
            className="flex flex-col items-center gap-4 p-6 bg-[#0f172a] rounded-xl shadow hover:shadow-xl transition hover:scale-105 text-center"
          >
            <div className="text-4xl text-[#219EBC]">{item.icon}</div>
            <div>
              <p className="font-semibold text-lg">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
