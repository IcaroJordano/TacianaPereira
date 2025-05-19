import { IoIosMenu } from "react-icons/io";
import logo from "../assets/montreal.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" 
    relative  lg:text-black text-neutral-700 lg:items-center items-end lg:justify-start   justify-center px-4    overflow-hidden z-30  w-full  flex  ">
      <div className="flex items-center gap-2 lg:py-4 py-2">
        <img
          className=" h-10 my-1   bg-white   lg:ml-0 object-contain  flex  "
          src={logo}
          alt=""
        />
        <span className="text-lg text-rose-800 font-semibold " >Taciana Pereira</span>
      </div>
      {/* <div className="hidden lg:flex text-sm  px-4 flex-col text-end   top-8 absolute right-2 ">
        <p className=" ">Rua Gov. Sampaio, Fortaleza-CE </p>
        <p>342 60030-070.</p>
      </div> */}
    </header>
  );
};
export default Header;
