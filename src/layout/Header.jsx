import { IoIosMenu } from "react-icons/io";
import logo from "../assets/montreal.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <header className="lg:bg-white relative  lg:text-black text-neutral-700 items-end justify-center px-4  lg:justify-   overflow-hidden z-30  w-full  flex  ">
      <div className="flex items-center gap-2 py-2">
        <img
          className=" h-10 my-1   bg-white   lg:ml-0 object-contain  flex  "
          src={logo}
          alt=""
        />
        <span className="text-lg text-rose-800 font-semibold " >Taciana Pereira</span>
      </div>
    </header>
  );
};
export default Header;
