import React from "react";

const GitHubContributions = () => {
  return (
    <section className="p-4 w-11/12 mx-auto rounded-xl shadow-md" id="github">
      <h2 className="text-4xl py-12 px-6 font-bold mb-4 text-center text-[#219EBC]">
        GitHub Contributions
      </h2>

      {/* GitHub Stats */}
      <div className="flex flex-col items-center gap-4">
        {/* Top Languages */}
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=MozahidHridoy24&layout=compact&theme=tokyonight"
          alt="Top Languages"
          className="rounded-md shadow"
        />

        {/* GitHub Contributions Graph */}
        <img
          src="https://ghchart.rshah.org/MozahidHridoy24"
          alt="GitHub Contribution Chart"
          className="rounded-md shadow mt-4 bg-black"
        />
      </div>
    </section>
  );
};

export default GitHubContributions;
