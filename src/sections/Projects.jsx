const projects = [
  {
    projectIMG: "/assets/insta-clone.png",
    projectURL: "https://github.com/SougataMondal2000/insta-clone",
  },
  {
    projectIMG: "/assets/todoodle.png",
    projectURL: "https://github.com/SougataMondal2000/todoodle_flask",
  },
  {
    projectIMG: "/assets/game-listing.png",
    projectURL: "https://github.com/SougataMondal2000/Game-Listinng-App",
  },
  {
    projectIMG: "/assets/pinterest-clone.png",
    projectURL: "https://github.com/SougataMondal2000/image-uploader",
  },
];

const Projects = () => {
  return (
    <div className="h-auto w-full flex items-center justify-center lg:pt-10">
      <div className="h-auto lg:w-[1100px]">
        <div className="p-10 pb-0">
          <h2 className="h-auto w-full text-[48px] text-[#DAD7CD] font-bold">
            Showcase of Brilliance
          </h2>
        </div>
        <div className="h-auto lg:w-[1000px] p-10">
          <ul className="grid lg:grid-cols-2 grid-cols-1">
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
