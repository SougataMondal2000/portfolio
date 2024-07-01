const About = () => {
  return (
    <div className="lg:h-[500px] h-full w-full relative flex items-center justify-center animate-fade-up animate-duration-[2000ms] animate-delay-200">
      <svg className="absolute w-full h-full">
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="pattern-circle"
            cx="10"
            cy="10"
            r="0.8"
            fill="#588157"
          ></circle>
        </pattern>

        <rect
          id="rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-circles)"
        ></rect>
      </svg>
      <div className=" lg:w-[1100px] w-full p-10">
        <div>
          <h2 className="relative w-full md:text-[48px] text-[36px] text-[#588157] font-bold">
            Unleashing my story
          </h2>
        </div>
        <div className="text-[#DAD7CD] md:text-[20px] text-[16px] pt-4 lg:w-[60%] w-full">
          <p className="pb-8 ab">
            Sougata, a web wizard who spins byte into beautiful masterpieces.
            Excels in solving puzzles of the virtual world.
          </p>
          <p className="pb-8">
            Master tamer of bugs and explorer of unknown virtual terrains. He’s
            not afraid to venture into wild codes.
          </p>
          <p>
            When he’s not busy coding, he’s either conjuring creative designs or
            weaving dreams with codes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
