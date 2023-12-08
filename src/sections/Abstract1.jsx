import FourColorSquare from "../components/FourColorSquare"
import SquareWithCircles from "../components/SquareWithCircles"
import SquareWithLargeCircle from "../components/SquareWithLargeCircle"
import SquareWithTriangle from "../components/SquareWithTriangle"


const Abstract1 = () => {
  return (
    <div className="p-20 w-full h-auto relative flex items-center justify-center">
      <SquareWithTriangle />
      <FourColorSquare />
      <SquareWithCircles />
      <SquareWithLargeCircle/>
    </div>
  )
}

export default Abstract1