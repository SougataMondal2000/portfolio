import SquareWithCircle2 from "../components/SquareWithCircle2"
import SquareWithTriangle2 from "../components/SquareWithTriangle2"
import SquareWithTriangle3 from "../components/SquareWithTriangle3"


const Abstract2 = () => {
  return (
    <div className="lg:p-20 p-10 lg:w-full h-auto flex items-center justify-center">
      <SquareWithTriangle3 />
      <SquareWithTriangle2 />
      <SquareWithCircle2 />
      <SquareWithCircle2 />
    </div>
  )
}

export default Abstract2