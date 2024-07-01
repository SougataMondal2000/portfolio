import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="h-[300px] w-full relative flex items-center justify-center animate-fade-right animate-duration-[2000ms] animate-delay-200">
      <div className="h-auto w-[1000px]">
        <div className="lg:pt-12 lg:pb-10 text-center">
          <h2 className="leading-none text-[#588157] font-bold md:text-[48px] text-[36px]">
            Hire Me!
          </h2>
        </div>
        <div className="max-md:hidden">
          <p className="text-[#DAD7CD] md:text-[20px] text-[16px] text-center lg:p-0 lg:pb-6 p-6">
            Astounded yet? Invoke the enigma, enlist right away
            <br />
            by hiring me!
          </p>
        </div>
        <div className="md:hidden">
          <p className="text-[#DAD7CD] md:text-[20px] text-[16px] text-center lg:p-0 lg:pb-6 p-6">
            Astounded yet? Invoke the enigma, enlist right away by hiring me!
          </p>
        </div>
        <div className="items-center justify-center flex">
          <a href="mailto:sougataofficial362000@gmail.com">
            <Button label="Contact"></Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
