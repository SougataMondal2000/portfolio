import FourColorSquare from "../components/FourColorSquare"
import SquareWithCircles from "../components/SquareWithCircles"
import SquareWithLargeCircle from "../components/SquareWithLargeCircle"
import SquareWithTriangle from "../components/SquareWithTriangle"


const Abstract1 = () => {
  return (
    <div className="lg:p-20 p-10 lg:w-full h-auto flex items-center justify-center">
      <SquareWithTriangle/>
      <FourColorSquare />
      <SquareWithCircles />
      <SquareWithLargeCircle/>
    </div>
  )
}

export default Abstract1