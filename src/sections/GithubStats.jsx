const GithubStats = () => {
  return (
    <div className="h-auto w-full relative flex items-center justify-center md:pt-10 pt-2 animate-fade-right animate-duration-[3000ms] animate-delay-200">
      <div className="h-auto lg:w-[1100px] w-full p-10">
        <div className="pb-10">
          <h2 className="relative h-auto w-full md:text-[48px] text-[36px] text-[#DAD7CD] font-bold">
            Github Stats{" "}
          </h2>
        </div>
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group max-w-2xl mx-auto mb-10">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://streak-stats.demolab.com/?user=SougataMondal2000&theme=hacker-inverted&hide_border=true&border_radius=8&card_width=450&card_height=200"
              alt="GitHub Streak Stats"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none"></div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Coding Streak</span>
              <span className="text-[#DAD7CD] font-medium">
                Active Developer
              </span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-400">Commitment Level</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">High</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 text-center">
            <div className="text-2xl font-bold text-blue-400">50+</div>
            <div className="text-xs text-gray-400 mt-1">Repositories</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 text-center">
            <div className="text-2xl font-bold text-purple-400">1000+</div>
            <div className="text-xs text-gray-400 mt-1">Commits</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-lg p-4 border border-green-500/20 text-center">
            <div className="text-2xl font-bold text-green-400">15+</div>
            <div className="text-xs text-gray-400 mt-1">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
