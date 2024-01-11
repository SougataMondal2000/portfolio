const skills = [
  {
    skill: "DSA",
    desc: "Algorithms, data structures, problem-solving arsenal. Conquered complex challenges.",
  },
  {
    skill: "Frontend",
    desc: "Pixel perfection, user delight. Crafting interfaces that sing.",
  },
  {
    skill: "Backend",
    desc: "The silent engine, powering experiences. Building the invisible castle.",
  },
  {
    skill: "UI/UX",
    desc: "Empathy in pixels, logic in flow. Shaping journeys, not just screens.",
  },
  {
    skill: "SEO",
    desc: "Browser's whisperer, organic traffic magnet. Unearthing content's hidden gold.",
  },
  {
    skill: "Web Scraping",
    desc: "Data's hidden stories, revealed. Extracting insights, one line at a time.",
  },
];

const Skills = () => {
  return (
    <div className="h-auto w-full relative flex items-center justify-center pt-10">
      <div className="h-auto lg:w-[1100px] w-full p-10">
        <div className="pb-10">
          <h2 className="relative h-auto w-full text-[48px] text-[#DAD7CD] font-bold">
            Skills and Expertise
          </h2>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-10">
            {skills.map((skill) => (
              <li key={skill.skill}>
                <h3 className="text-[#DAD7CD] font-bold mb-2 text-[20px]">
                  {skill.skill}
                </h3>
                <p className="text-[#A3B18A] text-[16px] lg:w-[75%] w-full">
                  {skill.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
