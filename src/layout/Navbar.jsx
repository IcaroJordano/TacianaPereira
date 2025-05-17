import { BiHeart, BiHome, BiHomeAlt, BiSearch } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

export function NavBar({}) {
  return (
    <nav
      className={` z-30 fixed bottom-0 text-neutral-500  w-full lg:w-14 border-e font-light border-neutral-200 lg:shadow shadow-2xl lg:justify-center items-center lg:gap-8 text-xs lg:flex-col h-14 lg:h-full flex bg-white`}
    >
      <Link to={'/'} className="hover:text-rose-500 text-neutral-900 justify-center gap-1 items-center flex flex-col w-1/4 ">
        <GoHome className="text-xl mt-1  " />
        <span className="lg:hidden  ">Home</span>
      </Link>
      <Link to={'/search'} className="hover:text-rose-500 text-neutral-900 justify-center gap-1 items-center flex flex-col w-1/4 ">
        <BiSearch className="text-xl mt-1  " />
        <span className="lg:hidden  ">Search</span>
      </Link>
      <Link to={"/pedido"} className="hover:text-rose-500 text-neutral-900 justify-center gap-1 items-center flex flex-col w-1/4 ">
        <BiHeart className="text-xl mt-1  " />
        <span className="lg:hidden  ">Pedido</span>
      </Link>
      <a className="hover:text-rose-500 text-neutral-900 justify-center gap-1 items-center flex flex-col w-1/4 ">
        <FaWhatsapp className=" text-xl mt-1 " />
        <span className="lg:hidden  ">Contact</span>
      </a>
    </nav>
  );
}
