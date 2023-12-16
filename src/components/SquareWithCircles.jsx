
const SquareWithCircles = () => {
  return (
    <div className="lg:w-200 lg:h-200 bg-[#0D0D0D] w-50 h-50">
      <svg width="200" height="200">
        <circle cx="50" cy="50" r="50" fill="white" />
        <circle cx="150" cy="50" r="50" fill="#DAD7CD" />
        <circle cx="50" cy="150" r="50" fill="#DAD7CD" />
        <circle cx="150" cy="150" r="50" fill="white" />
      </svg>
    </div>
  )
}

export default SquareWithCircles