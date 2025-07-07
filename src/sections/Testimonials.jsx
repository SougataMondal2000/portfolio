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
          <div className="px-10 pb-2">
            <h2 className="relative h-auto w-full md:text-[48px] text-[32px] text-[#DAD7CD] font-bold flex items-center after:content-[''] after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-[#DAD7CD] after:to-transparent after:ml-4">
              Testimonials
            </h2>
          </div>
          <div className="h-auto lg:w-[1000px] px-10 py-2">
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
