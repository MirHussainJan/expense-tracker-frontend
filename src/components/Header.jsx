import { AiFillBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex fixed w-full items-center justify-between py-2 px-4">
      {/* Left Section */}
      <div className="left">
        <h1 className="m-0 fs-3 font-semibold">Welcome, User</h1>
      </div>

      {/* Right Section */}
      <div className="right flex items-center gap-4">
        <input
          type="text"
          className="px-3 py-2 shadow-lg border-2 border-black rounded-full outline-none"
          placeholder="Search..."
        />
        <div className="flex items-center justify-center w-10 h-10 shadow-lg border-2 border-black rounded-full bg-white">
          <AiFillBell className="text-xl"/>
        </div>
        <img
          className="w-10 h-10 rounded-full shadow-lg border-2 border-black"
          src="https://thumbs.dreamstime.com/b/featuring-simple-minimalistic-user-avatar-icon-black-white-background-illustration-simple-minimalistic-user-326202569.jpg"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
