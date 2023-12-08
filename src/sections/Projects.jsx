const projects = [
  {
    projectIMG: "/src/assets/food-app.png",
    projectURL: "https://github.com/SougataMondal2000/Food-App",
  },
  {
    projectIMG: "/src/assets/todoodle.png",
    projectURL: "https://github.com/SougataMondal2000/todoodle_flask",
  },
  {
    projectIMG: "/src/assets/game-listing.png",
    projectURL: "https://github.com/SougataMondal2000/Game-Listinng-App",
  },
  {
    projectIMG: "/src/assets/pinterest-clone.png",
    projectURL: "https://github.com/SougataMondal2000/image-uploader",
  },
];

const Projects = () => {
  return (
    <div className="h-auto w-full relative flex items-center justify-center pt-10">
      <div className="h-auto w-[1100px] p-10">
        <div className="pb-10">
          <h2 className="relative h-auto w-full text-[48px] text-[#DAD7CD] font-bold">
            Showcase of Brilliance
          </h2>
        </div>
        <div className="w-[1000px]">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((item) => (
              <li key={item.project} className="">
                <a href={item.projectURL} target="blank">
                  <img
                    src={item.projectIMG}
                    alt=""
                    className="h-[500px] w-[500px] rounded-custom  p-4"
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
