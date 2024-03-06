import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiFlask } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const techIcons = [
  {
    icon: <FaHtml5 className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <FaCss3Alt className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <IoLogoJavascript className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <FaReact className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <SiMongodb className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <FaNodeJs className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <SiExpress className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <FaGitAlt className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <BiLogoTailwindCss className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <SiMui className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <SiBootstrap className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <FaPython className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <TbBrandMysql className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <SiFlask className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <BiLogoDjango className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
  {
    icon: <TbBrandNextjs className="lg:w-8 lg:h-8 w-5 h-5" />,
  },
];

const Test = () => {
  return (
    <div className="h-auto w-full relative flex items-center justify-center pt-10 animate-fade-right animate-duration-[2000ms] animate-delay-200">
      <div className="h-auto lg:w-[1100px] w-full p-10">
        <div className="pb-10">
          <h2 className="relative h-auto w-full text-[48px] text-[#DAD7CD] font-bold">
            Tech Stack
          </h2>
        </div>
        <div className="h-auto w-auto pb-4">
          <ul className="flex gap-4 max-lg:justify-center items-center flex-wrap logos">
            <Swiper
              slidesPerView={7}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              modules={[Autoplay]}
              className=""
            >
              {techIcons.map((item) => (
                <SwiperSlide key={item.index}>
                  <li
                    key={item.icon}
                    className="bg-[#DAD7CD] rounded-md flex justify-center items-center lg:w-20 lg:h-20 w-14 h-14 hover:bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 logos-slide"
                  >
                    {item.icon}
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              slidesPerView={7}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={5000}
              modules={[Autoplay]}
              className="lg:pt-4"
            >
              {techIcons.map((item) => (
                <SwiperSlide key={item.index}>
                  <li
                    key={item.icon}
                    className="bg-[#DAD7CD] rounded-md flex justify-center items-center lg:w-20 lg:h-20 w-14 h-14 hover:bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 logos-slide"
                  >
                    {item.icon}
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Test;
