import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'; // Importing the back arrow icon

export default function SidebarImage() {
  return (
    <div className="hidden md:block w-1/2 relative bg-white">
      <img
        src="/left.jfif"
        alt="Background"
        className="h-full w-full object-cover p-2 rounded-xl"
      />
      {/* Back Button */}
      <Link to="/" className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 absolute right-5 top-5 z-10">
        <IoArrowBack className="text-gray-600 text-2xl" />
      </Link>
      <div className="absolute bottom-8 left-8 text-zinc-200">
        <h1 className="text-3xl font-bold">Create Moments, Share Memories</h1>
        <p className="text-lg mt-2">Organize and enjoy your group activities effortlessly.</p>
      </div>
    </div>
  );
}
