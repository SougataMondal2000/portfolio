import Button from "../components/Button";
import Triangle from "../components/Triangle"; 

const Hero = () => {
  const cvLINK = "/assets/SougataMondal-Resume.pdf";
  
  return (
    <div className="lg:h-[650px] lg:p-4 h-full p-10 w-full flex items-center justify-center">
      <div className="h-auto w-full lg:w-[1000px]">
        <div className="flex items-center justify-center ">
          <Triangle />
        </div>
        <div className="pt-12 pb-10 justify-center flex text-center">
          <h1 className="leading-none text-[#588157] font-bold text-[60px] lg:text-[80px]">
            Web Wizardry by Sougata!
          </h1>
        </div>
        <div className="items-center justify-center flex gap-3 h-fit">
          <a href={cvLINK} download>
            <Button label="Download CV"></Button>
          </a>
          <a href="mailto:sougataofficial362000@gmail.com">
            <Button label="Contact with me"></Button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
