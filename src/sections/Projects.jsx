const projects = [
  {
    projectIMG: "/assets/phonepal-fullstack.png",
    projectURL: "https://github.com/SougataMondal2000/PhonePal-fullstack",
  },
  {
    projectIMG: "/assets/insta-clone.png",
    projectURL: "https://github.com/SougataMondal2000/insta-clone",
  },
  {
    projectIMG: "/assets/pinterest-clone.png",
    projectURL: "https://github.com/SougataMondal2000/image-uploader",
  },
  {
    projectIMG: "/assets/medpuls.png",
    projectURL: "https://medpuls.netlify.app/login",
  },
];

const Projects = () => {
  return (
    <div className="h-auto w-full flex items-center justify-center md:pt-10 pt-2 animate-fade-right animate-duration-[2000ms] animate-delay-200">
      <div className="h-auto lg:w-[1100px] w-full p-10">
        <div className="md:pb-10 pb-2">
          <h2 className="relative h-auto w-full md:text-[48px] text-[36px] text-[#DAD7CD] font-bold">
            Showcase of Brilliance
          </h2>
        </div>
        <div className="h-auto lg:w-[1000px]">
          <ul className="flex flex-wrap justify-start items-center">
            {projects.map((item) => (
              <li key={item.project} className="">
                <a href={item.projectURL} target="blank">
                  <img
                    src={item.projectIMG}
                    alt=""
                    className="lg:h-[500px] lg:w-[500px] rounded-custom p-4"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
