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
            My story
          </h2>
        </div>
        <div className="text-[#DAD7CD] md:text-[20px] text-[16px] pt-4 lg:w-[60%] w-full">
          <p className="pb-8 ab">
            I’m Sougata, a self-taught developer who started by building passion
            projects and debugging my way through late nights. What began as
            curiosity soon turned into a deep commitment to frontend
            engineering.
          </p>
          <p className="pb-8">
            From understanding the basics of JavaScript to building full-stack
            applications with React and Next.js, I’ve grown by getting my hands
            dirty and solving real-world problems. I’ve worked on everything
            from responsive UI to API integrations—always focusing on clean,
            maintainable code.
          </p>
          <p>
            Beyond code, I enjoy design and pay attention to detail. Whether
            it's tweaking pixel-perfect layouts or learning about new tools, I’m
            always trying to become a better builder—one commit at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
