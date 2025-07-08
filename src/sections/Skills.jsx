import React from "react";
import {
  FaCode,
  FaReact,
  FaServer,
  FaFigma,
  FaSearch,
  FaDocker,
  FaPython,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaDigitalOcean,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiHubspot,
  SiVercel,
  SiGooglesearchconsole,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  {
    skill: "DSA",
    desc: "Strong foundation in algorithms and data structures. I enjoy solving complex problems and optimizing code for better performance.",
    languagesUsed: ["Python", "Javascript", "Typescript"],
    icon: <FaCode className="text-2xl text-[#588157]" />,
  },
  {
    skill: "Frontend",
    desc: "Creating responsive, interactive user interfaces with modern frameworks. I focus on clean code and smooth user experiences.",
    techStack: [
      "ReactJS",
      "NextJS",
      "Tailwind",
      "Material UI",
      "Framer Motion",
    ],
    icon: <FaReact className="text-2xl text-[#588157]" />,
  },
  {
    skill: "Backend",
    desc: "Building robust server-side applications and APIs. I work with databases, authentication, and ensuring scalable architecture.",
    techStack: ["NodeJS", "Express", "MongoDB", "SQL"],
    icon: <FaServer className="text-2xl text-[#588157]" />,
  },
  {
    skill: "UI/UX",
    desc: "Designing user-centered interfaces that are both beautiful and functional. I research user needs and create intuitive experiences.",
    tools: ["Figma", "Framer"],
    icon: <FaFigma className="text-2xl text-[#588157]" />,
  },
  {
    skill: "SEO",
    desc: "Optimizing websites for search engines to increase organic traffic. I analyze keywords, improve site structure, and track performance.",
    tools: ["HubSpot", "UberSuggest", "Google Search Console"],
    icon: <FaSearch className="text-2xl text-[#588157]" />,
  },
  {
    skill: "Hosting & CI/CD",
    desc: "Deploying applications and setting up automated workflows. I manage cloud infrastructure and ensure smooth deployment processes.",
    techStack: ["Docker", "Vercel", "DigitalOcean", "Github"],
    icon: <FaDocker className="text-2xl text-[#588157]" />,
  },
];

const getIcon = (name) => {
  const iconMap = {
    Python: <FaPython className="text-lg text-[#588157]" />,
    Javascript: <FaJs className="text-lg text-[#588157]" />,
    Typescript: <SiTypescript className="text-lg text-[#588157]" />,
    ReactJS: <FaReact className="text-lg text-[#588157]" />,
    NextJS: <SiNextdotjs className="text-lg text-[#A3B18A]" />,
    Tailwind: <SiTailwindcss className="text-lg text-[#588157]" />,
    "Material UI": <SiMui className="text-lg text-[#588157]" />,
    "Framer Motion": <TbBrandFramerMotion className="text-lg text-[#588157]" />,
    NodeJS: <FaNodeJs className="text-lg text-[#588157]" />,
    Express: <SiExpress className="text-lg text-[#A3B18A]" />,
    MongoDB: <SiMongodb className="text-lg text-[#588157]" />,
    SQL: <FaDatabase className="text-lg text-[#588157]" />,
    Figma: <FaFigma className="text-lg text-[#588157]" />,
    Framer: <SiFramer className="text-lg text-[#588157]" />,
    HubSpot: <SiHubspot className="text-lg text-[#588157]" />,
    UberSuggest: <FaSearch className="text-lg text-[#588157]" />,
    "Google Search Console": (
      <SiGooglesearchconsole className="text-lg text-[#588157]" />
    ),
    Docker: <FaDocker className="text-lg text-[#588157]" />,
    Vercel: <SiVercel className="text-lg text-[#A3B18A]" />,
    DigitalOcean: <FaDigitalOcean className="text-lg text-[#588157]" />,
    Github: <FaGithub className="text-lg text-[#A3B18A]" />,
  };

  return iconMap[name] || <div className="w-4 h-4 bg-[#A3B18A] rounded"></div>;
};

const Skills = () => {
  return (
    <div className="h-auto w-full relative flex items-center justify-center md:pt-10 animate-fade-right animate-duration-[2000ms] animate-delay-200">
      <div className="h-auto lg:w-[1100px] w-full p-10">
        <div className="md:pb-10 pb-4">
          <h2 className="relative h-auto w-full md:text-[48px] text-[32px] text-[#DAD7CD] font-bold flex items-center after:content-[''] after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-[#DAD7CD] after:to-transparent after:ml-4">
            Skills and Expertise
          </h2>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <li
                key={skill.skill}
                className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-[#588157] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-[#DAD7CD] font-bold text-[20px]">
                    {skill.skill}
                  </h3>
                </div>
                <p className="text-[#A3B18A] text-[16px] mb-4 leading-relaxed">
                  {skill.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {(
                    skill.techStack ||
                    skill.languagesUsed ||
                    skill.tools ||
                    []
                  ).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1 rounded-full border border-[#404040]"
                    >
                      {getIcon(item)}
                      <span className="text-[#DAD7CD] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
