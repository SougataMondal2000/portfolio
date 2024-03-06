const TestimonialCard = ({ image, name, remark }) => {
  return (
    <div className="md:h-[400px] md:w-[350px] rounded-custom p-10 bg-[#0D0D0D] max-lg:mb-8">
      <div>
        <img src={image} alt="" className="w-[50px] h-[50px] rounded-full" />
      </div>
      <div>
        <p className="text-[#A3B18A] font-bold text-[20px] mt-10 h-48">
          {remark}
        </p>
      </div>
      <div>
        <p className="text-[#A3B18A] text-[14px]">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
