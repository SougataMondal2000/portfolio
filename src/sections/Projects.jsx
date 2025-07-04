import React from "react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const projects = [
  {
    projectName: "ATC.",
    projectDesc:
      "Modern e-commerce landing page featuring responsive design, smooth animations, and conversion-optimized layouts for a local retail business.",
    projectIMG: "/assets/atc.png",
    techStack: ["Tailwind", "NextJS", "Typescript"],
    projectURL: "https://anukultradingcorp.vercel.app/",
  },
  {
    projectName: "Sabri Helpage",
    projectDesc:
      "Comprehensive NGO platform with donation management, volunteer coordination, and impact tracking to amplify social change initiatives.",
    techStack: [
      "Nodejs",
      "Express",
      "MongoDB",
      "NextJS",
      "Tailwind",
      "Typescript",
    ],
    projectIMG: "/assets/sh.png",
    projectURL: "https://sabrihelpage.org/",
  },
  {
    projectName: "ShareYrHeart",
    projectDesc:
      "Mental wellness ecosystem connecting users with licensed therapists, peer support communities, and personalized treatment programs.",
    techStack: [
      "Nodejs",
      "Express",
      "MongoDB",
      "NextJS",
      "Tailwind",
      "Typescript",
    ],
    projectIMG: "/assets/syh.png",
    projectURL: "https://shareyrheart.com/",
  },
  {
    projectName: "Medical Dashboard System",
    projectDesc:
      "Advanced healthcare management platform featuring AI-powered diagnostics, electronic health records, and real-time patient monitoring.",
    techStack: ["Nodejs", "Express", "MongoDB", "Tailwind", "NextJS"],
    projectIMG: "/assets/medpuls.png",
    projectURL: "https://medpuls.netlify.app/login",
  },
];

const getTechIcon = (tech) => {
  const iconProps = { size: 20, className: "text-white" };

  switch (tech.toLowerCase()) {
    case "tailwind":
      return <SiTailwindcss {...iconProps} />;
    case "nextjs":
      return <SiNextdotjs {...iconProps} />;
    case "typescript":
      return <SiTypescript {...iconProps} />;
    case "nodejs":
      return <SiNodedotjs {...iconProps} />;
    case "express":
      return <SiExpress {...iconProps} />;
    case "mongodb":
      return <SiMongodb {...iconProps} />;
    default:
      return <span className="text-white text-sm">{tech}</span>;
  }
};

const Projects = () => {
  return (
    <div className="h-auto w-full flex items-center justify-center md:pt-10 pt-2 animate-fade-right animate-duration-[2000ms] animate-delay-200">
      <div className="h-auto lg:w-[1100px] w-full p-10">
        <div className="md:pb-10 pb-2">
          <h2 className="relative h-auto w-full md:text-[48px] text-[36px] text-[#DAD7CD] font-bold">
            Client Projects
          </h2>
        </div>
        <div className="h-auto lg:w-[1000px]">
          <ul className="flex flex-wrap justify-start items-center">
            {projects.map((item, index) => (
              <li key={index} className="relative group">
                <a href={item.projectURL} target="blank">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.projectIMG}
                      alt={item.projectName}
                      className="lg:h-[500px] lg:w-[500px] rounded-custom p-4 transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 m-4 rounded-custom">
                      <h3 className="text-white text-xl font-bold mb-3 text-center">
                        {item.projectName}
                      </h3>

                      <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">
                        {item.projectDesc}
                      </p>

                      <div className="flex flex-wrap gap-3 justify-center items-center">
                        {item.techStack.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded-md"
                          >
                            {getTechIcon(tech)}
                            <span className="text-white text-xs">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
