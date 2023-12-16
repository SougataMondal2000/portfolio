const FourColorSquare = () => {
  return (
    <div className="lg:w-200 lg:h-200 bg-[#0D0D0D] w-50 h-50">
      <svg width="200" height="200">
        <rect x="0" y="0" width="100" height="100" fill="#DAD7CD" />
        <rect x="100" y="100" width="100" height="100" fill="white" />
      </svg>
    </div>
  );
};

export default FourColorSquare;
