import StatCard from "../components/StatCard";

export default function GroupDetails() {
  return (
    <div className="pt-16 h-screen">
      {/* Top Section with Group Info */}
      <div className="w-full bg-gradient-to-r h-1/3 rounded-full relative flex items-center px-6">
        {/* Left Section: Group Image and Name */}
        <div className="flex items-center space-x-4">
          <div>
            <img
              src="/right.jfif"
              alt="Group"
              className="w-36 h-36 rounded-full shadow-lg"
            />
          </div>
          {/* Group Name */}
          <div className="text-black text-3xl font-bold">
            Group Name
          </div>
        </div>

        {/* Right Section: StatCards */}
        <div className="ml-auto flex space-x-4">
          <div className="w-48">
            <StatCard color={"white"} amount={23} label={"Head"} />
          </div>
          <div className="w-48">
            <StatCard color={"white"} amount={23} label={"Members"} />
          </div>
          <div className="w-48">
            <StatCard color={"white"} amount={23} label={"Projects"} />
          </div>
        </div>
      </div>
    </div>
  );
}
