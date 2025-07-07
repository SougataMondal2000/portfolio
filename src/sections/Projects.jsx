import React, { useState } from "react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDigitalocean,
  SiDocker,
  SiRender,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import {
  FaServer,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

const projects = [
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
      "DigitalOcean",
      "Docker",
      "Vercel",
    ],
    projectIMG: "/assets/syh.png",
    projectURL: "https://shareyrheart.com/",
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
      "DigitalOcean",
      "Vercel",
    ],
    projectIMG: "/assets/sh.png",
    projectURL: "https://sabrihelpage.org/",
  },
  {
    projectName: "Medical Dashboard System",
    projectDesc:
      "Advanced healthcare management platform featuring AI-powered diagnostics, electronic health records, and real-time patient monitoring.",
    techStack: [
      "Nodejs",
      "Express",
      "MongoDB",
      "Tailwind",
      "NextJS",
      "Render",
      "Netlify",
    ],
    projectIMG: "/assets/medpuls.png",
    projectURL: "https://medpuls.netlify.app/login",
  },
  {
    projectName: "ATC.",
    projectDesc:
      "Modern e-commerce landing page featuring responsive design, smooth animations, and conversion-optimized layouts for a local retail business.",
    projectIMG: "/assets/atc.png",
    techStack: ["Tailwind", "NextJS", "Typescript", "Vercel"],
    projectURL: "https://anukultradingcorp.vercel.app/",
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
    case "digitalocean":
      return <SiDigitalocean {...iconProps} />;
    case "docker":
      return <SiDocker {...iconProps} />;
    case "render":
      return <SiRender {...iconProps} />;
    case "netlify":
      return <SiNetlify {...iconProps} />;
    case "vercel":
      return <SiVercel {...iconProps} />;
    default:
      return <span className="text-white text-sm">{tech}</span>;
  }
};

const Projects = () => {
  return (
    <div className="h-auto w-full flex items-center justify-center md:pt-10 pt-2 animate-fade-right animate-duration-[2000ms] animate-delay-200">
      <div className="h-auto lg:w-[1100px] w-full p-10">
        <div className="md:pb-10 pb-2">
          <h2 className="relative h-auto w-full md:text-[48px] text-[32px] text-[#DAD7CD] font-bold flex items-center after:content-[''] after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-[#DAD7CD] after:to-transparent after:ml-4">
            Client Projects
          </h2>
        </div>
        <div className="h-auto lg:w-[1000px]">
          <ul className="flex flex-wrap justify-start items-center">
            {projects.map((item, index) => (
              <li key={index} className="relative group">
                <div className="hidden md:block">
                  <a href={item.projectURL} target="blank">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.projectIMG}
                        alt={item.projectName}
                        className="lg:h-[500px] lg:w-[500px] rounded-custom p-4 transition-transform duration-300 group-hover:scale-105"
                      />
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
                </div>
                <div className="md:hidden w-full">
                  <div className="bg-[#0D0D0D] rounded-lg overflow-hidden shadow-lg mb-6">
                    <img
                      src={item.projectIMG}
                      alt={item.projectName}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-4">
                      <h3 className="text-[#DAD7CD] text-xl font-bold mb-2">
                        {item.projectName}
                      </h3>

                      <p className="text-[#A3B18A] text-sm mb-3">
                        {item.projectDesc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
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

                      <div className="flex gap-2">
                        <a
                          href={item.projectURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#588157] text-white px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 flex-1 justify-center"
                        >
                          <FaExternalLinkAlt size={14} />
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
