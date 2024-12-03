import { AiFillBell } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex border-2 border-white w-full fixed items-center justify-between py-2 px-4 bg-glass rounded-full z-50">
      {/* Left Section */}
      <div className="left flex items-center rounded-full">
        <img
          className="w-10 h-10"
          src="https://pngimg.com/uploads/letter_e/letter_e_PNG50.png"
          alt=""
        />
        <h1 className="m-0 fw-bold text-lg font-semibold ml-2">XPENSE</h1>
      </div>

      {/* Right Section */}
      <div className="right flex items-center gap-4 sm:gap-2">
      <Link to="/register">
          <button className="py-2 text-sm border-white border-2 px-4 bg-black rounded-full text-white">
            Login
          </button>
        </Link>
        <div className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full bg-white">
          <AiFillBell className="text-xl" />
        </div>
        <img
          className="w-10 h-10 border-2 border-white rounded-full"
          src="https://www.shareicon.net/download/2017/05/09/885769_user_512x512.png"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Header;