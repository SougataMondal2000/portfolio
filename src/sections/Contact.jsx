import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="h-[300px] w-full relative flex items-center justify-center">
      <div className="h-auto w-[1000px]">
        <div className="lg:pt-12 lg:pb-10 text-center">
          <h2 className="leading-none text-[#588157] font-bold text-[48px]">
            Hire Me!
          </h2>
        </div>
        <div>
          <p className="text-[#DAD7CD] text-[20px] text-center lg:p-0 lg:pb-6 p-6">Astounded yet? Invoke the enigma, enlist right away 
          <br />by hiring me!</p>
        </div>
        <div className="items-center justify-center flex">
          <Button label="Contact"></Button>
        </div>
      </div>
    </div>
  )
}

export default Contact