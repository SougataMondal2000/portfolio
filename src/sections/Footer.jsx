import { LiaLinkedinIn } from "react-icons/lia";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiFacebookFill } from "react-icons/ri";

const icons = [
  {
    icon: <RiFacebookFill />,
    socialURL: "https://www.facebook.com/profile.php?id=100006050146501",
  },
  {
    icon: <LiaLinkedinIn />,
    socialURL: "https://www.linkedin.com/in/sougata-mondal-b9980020a/",
  },
  {
    icon: <TbBrandGithubFilled />,
    socialURL: "https://github.com/SougataMondal2000",
  },
];

const Footer = () => {
  return (
    <div className="lg:h-[200px] w-full relative flex items-center justify-center animate-fade-right animate-duration-[2000ms] animate-delay-200">
      <div>
        <div className="h-auto w-auto pb-4">
          <ul className="flex gap-2 justify-center items-center">
            {icons.map((item, index) => (
              <li
                key={index}
                className="bg-[#DAD7CD] rounded-full border border-black flex justify-center items-center w-6 h-6 hover:bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <a href={item.socialURL} target="blank">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[#DAD7CD] text-[12px] text-center pb-6">
            Copyright © Sougata 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
