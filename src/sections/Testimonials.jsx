import TestimonialCard from "../components/TestimonialCard";
const testimonials = [
  {
    remark: "A true maestro of the web universe.",
    name: "Anukul Trading Corporation",
    image: "/assets/atclogo.png",
  },
  {
    remark: "His clean code is a treat to the eyes.",
    name: "Balpreet Singh, We StoryBoard",
    image: "/assets/westoryboard.webp",
  },
];
const Testimonials = () => {
  return (
    <div className="">
      <div className="h-auto w-full flex items-center justify-center lg:pt-10 animate-fade-right animate-duration-[2000ms] animate-delay-200">
        <div className="h-auto lg:w-[1100px]">
          <div className="p-10 pb-0">
            <h2 className="h-auto w-full text-[48px] text-[#DAD7CD] font-bold">
              Testimonials
            </h2>
          </div>
          <div className="h-auto lg:w-[1000px] p-10">
            <ul className="grid lg:grid-cols-2 grid-cols-1">
              {testimonials.map((item, id) => (
                <TestimonialCard
                  key={id}
                  remark={item.remark}
                  image={item.image}
                  name={item.name}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
