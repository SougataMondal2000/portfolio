import React from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaSearch } from "react-icons/fa";

const timelineData = [
  {
    title: "BCA",
    type: "education",
    institution: "Techno India University",
    period: "Jun 2018 - Jul 2021",
    desc: "Foundation stones of logic, algorithms dancing in mind. Building tomorrow's digital architects.",
    icon: FaGraduationCap,
  },
  {
    title: "SEO Analyst",
    type: "experience",
    company: "Brainex Media",
    period: "Aug 2022 - Nov 2022",
    desc: "Browser's whisperer, organic traffic magnet. Unearthing content's hidden gold.",
    icon: FaSearch,
  },
  {
    title: "MCA",
    type: "education",
    institution: "Techno India University",
    period: "Nov 2022 - July 2024",
    desc: "Deep dive into advanced algorithms, machine learning symphony. Crafting intelligence from code.",
    icon: FaGraduationCap,
  },
  {
    title: "Full Stack Developer",
    type: "experience",
    company: "365 AI Tech",
    period: "Jan 2024 - Present",
    desc: "End-to-end architect, bridging frontend dreams with backend reality. Building digital ecosystems.",
    icon: FaCode,
  },
];

const TimelineNode = ({ item, index, isLeft }) => {
  const nodeColor = item.type === "education" ? "bg-[#588157]" : "bg-[#A3B18A]";
  const nodeHoverColor =
    item.type === "education" ? "hover:bg-[#6B8E6B]" : "hover:bg-[#B8C4A8]";
  const IconComponent = item.icon;

  return (
    <div
      className={`flex items-center mb-8 md:mb-16 ${
        isLeft ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`w-full md:w-5/12 ${
          isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
        } pl-8 md:pl-0`}
      >
        <div className="bg-[#344E41] bg-opacity-50 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg border border-[#588157] border-opacity-30 hover:border-opacity-60 transition-all duration-300 group">
          <div
            className={`flex items-center mb-3 ${
              isLeft ? "md:justify-end" : "md:justify-start"
            } justify-start`}
          >
            <span
              className={`inline-flex items-center px-2 md:px-3 py-1 text-xs font-medium rounded-full ${
                item.type === "education"
                  ? "bg-[#588157] text-[#DAD7CD]"
                  : "bg-[#A3B18A] text-[#344E41]"
              }`}
            >
              <IconComponent className="w-3 h-3 mr-1" />
              {item.type === "education" ? "Education" : "Experience"}
            </span>
          </div>
          <h3
            className={`text-[#DAD7CD] font-bold text-[18px] md:text-[20px] mb-2 flex items-center gap-2 ${
              !isLeft ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {(!isLeft || window.innerWidth < 768) && (
              <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-[#588157]" />
            )}
            {item.title}
            {isLeft && window.innerWidth >= 768 && (
              <IconComponent className="w-5 h-5 text-[#588157]" />
            )}
          </h3>
          <div className="text-[#A3B18A] text-[14px] md:text-[16px] font-medium mb-1">
            {item.institution || item.company}
          </div>
          <div className="text-[#588157] text-[12px] md:text-[14px] font-bold mb-3">
            {item.period}
          </div>
          <p className="text-[#A3B18A] text-[13px] md:text-[14px] leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
      <div className="absolute left-4 md:relative md:left-auto flex items-center justify-center">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${nodeColor} ${nodeHoverColor} border-3 md:border-4 border-[#DAD7CD] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-10 flex items-center justify-center max-md:hidden`}
        >
          <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-white " />
        </div>
        <div
          className={`max-md:hidden absolute top-1/2 transform -translate-y-1/2 w-6 md:w-8 h-0.5 md:h-1 bg-gradient-to-r from-[#588157] to-[#A3B18A] opacity-60 ${
            !isLeft
              ? "md:left-12 md:bg-gradient-to-r left-10"
              : "md:right-12 md:bg-gradient-to-l right-10"
          }`}
        ></div>
      </div>
      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
};

const EducationAndExperience = () => {
  return (
    <div className="h-auto w-full relative flex items-center justify-center md:pt-10 animate-fade-right animate-duration-[2000ms] animate-delay-200">
      <div className="h-auto lg:w-[1100px] w-full p-4 md:p-10">
        <div className="md:pb-10 pb-6">
          <h2 className="relative h-auto w-full md:text-[48px] text-[32px] text-[#DAD7CD] font-bold flex items-center after:content-[''] after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-[#DAD7CD] after:to-transparent after:ml-4">
            My Journey
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-[#588157] via-[#A3B18A] to-[#588157] opacity-30"></div>
          {timelineData.map((item, index) => (
            <TimelineNode
              key={index}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
