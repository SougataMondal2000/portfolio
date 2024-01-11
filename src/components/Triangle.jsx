const Triangle = () => {
  return (
    <div className="relative w-[100px] h-auto items-center flex justify-center animate-fade-down animate-duration-[1000ms] animate-delay-200">
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        fill="#588157"
        style={{ transform: "translateX(20px)" }}
      >
        <polygon points="0,100 100,100 50,0" />
      </svg>

      {/* Overlay the ghost triangle with transparency and border */}
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        fill="transparent"
        style={{
          stroke: "#A3B18A",
          strokeWidth: 4,
          transform: "translateX(-18px)",
        }}
      >
        <polygon points="0,100 100,100 50,0" />
      </svg>
    </div>
  );
};

export default Triangle;
