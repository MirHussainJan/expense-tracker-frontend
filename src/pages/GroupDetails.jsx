export default function GroupDetails() {
  return (
    <div className="pt-16 h-screen bg-gray-100">
      {/* Top Section with Group Info */}
      <div className="w-full bg-gradient-to-r from-pink-500 to-orange-400 h-1/3  rounded-full relative flex items-center px-6">
        {/* Group Name */}
        <div className="text-white text-3xl font-bold">
          Group Name {/* Replace with the actual group name */}
        </div>

        {/* Group Image */}
        <div className="absolute left-1/2 bottom-[-48px] transform -translate-x-1/2">
          <img
            src="/right.jfif" // Replace with actual group image URL
            alt="Group"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
