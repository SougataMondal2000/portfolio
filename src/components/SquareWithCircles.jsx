
const SquareWithCircles = () => {
  return (
    <div>
      <svg width="200" height="200" className="bg-[#0D0D0D]">
        <circle cx="50" cy="50" r="50" fill="white" />
        <circle cx="150" cy="50" r="50" fill="#DAD7CD" />
        <circle cx="50" cy="150" r="50" fill="#DAD7CD" />
        <circle cx="150" cy="150" r="50" fill="white" />
      </svg>
    </div>
  )
}

export default SquareWithCircles