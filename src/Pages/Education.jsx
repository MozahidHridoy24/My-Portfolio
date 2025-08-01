import React from "react";
import universityLogo from "../assets/Graduation.jpg";

const Education = () => {
  return (
    <section className="py-8 px-4 w-11/12 mx-auto ">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#219EBC]">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg shadow-md p-6 items-center bg-[radial-gradient(circle_at_80%_80%,#0f172a_10%,transparent_70%)]">
        {/* Year */}
        <div className="text-2xl text-center font-bold text-[#219EBC]">
          2016 – 2021
        </div>

        {/* Degree & Details */}
        <div className="space-y-2 p-2 border-l-2 border-[#219EBC]">
          <h3 className="text-xl font-bold">
            B.Sc. in Computer Science & Engineering
          </h3>
          <p className="text-lg">North South University, Dhaka</p>

          <p className="text-sm">
            Relevant Coursework: Data Structures, Algorithms, Artificial
            Intelligence, Machine Learning
          </p>

          {/* Extracurricular Activities */}
          <div>
            <p className="text-sm font-semibold">Extracurricular Activities:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Former Member, NSU Ethics Club</li>
              <li>Former Member, NSU Shangskritik Shangathan</li>
            </ul>
          </div>
        </div>

        {/* University Logo */}
        <div className="flex justify-center">
          <img
            src={universityLogo}
            alt="University Logo"
            className="w-80 h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
