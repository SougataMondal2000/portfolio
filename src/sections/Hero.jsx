import Button from "../components/Button";
import Triangle from "../components/Triangle";

const Hero = () => {
  return (
    <div className="h-[650px] w-full relative flex items-center justify-center">
      <div className="h-auto w-[1000px]">
        <div className="items-center justify-center flex">
          <Triangle />
        </div>
        <div className="pt-12 pb-10 justify-center flex text-center">
          <h1 className="leading-none text-[#588157] font-bold text-[80px]">
            Web Wizardry by Sougata!
          </h1>
        </div>
        <div className="items-center justify-center flex gap-3 h-fit">
          <Button label="Download CV"></Button>
          <Button label="Contact with me"></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
