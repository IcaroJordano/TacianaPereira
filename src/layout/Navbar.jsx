import { useEffect, useState } from "react";
import { BiHeart, BiHome, BiHomeAlt, BiSearch } from "react-icons/bi";
import { BsHandbag, BsHandbagFill, BsHeartFill } from "react-icons/bs";
import { CgHome } from "react-icons/cg";
import { FaSearch, FaShoppingBag, FaWhatsapp } from "react-icons/fa";
import { FaBagShopping, FaBasketShopping } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { ImSearch } from "react-icons/im";
import { IoCartOutline, IoCartSharp, IoSearch } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { Link, useLocation, useParams } from "react-router-dom";

export function NavBar({}) {
  const location = useLocation();
  const [urlAtual, setUrlAtual] = useState("");

  const numero = "5585992638488";  
  const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
  const link = isMobile
  ? `https://wa.me/${numero}`
  : `https://web.whatsapp.com/send?phone=${numero}`;
  

  useEffect(() => {
    const url = `#${location.pathname}${location.search}${location.hash}`;
    setUrlAtual(url);
  }, [location]);

  return (
    <nav
      className={` z-30 fixed bottom-0 text-neutral-500  w-full lg:w-14 border-e font-light border-neutral-200 lg:shadow shadow-2xl lg:justify-center items-center lg:gap-8 text-xs lg:flex-col h-14 lg:h-full flex bg-white`}
    >
      <Link
        to={"/"}
        className={`${urlAtual ==='#/'?'transition-all text-rose-600':'text-neutral-900'}  justify-center gap-1 items-center flex flex-col w-1/4 `}
      >
        {urlAtual ==='#/' ?
        <GoHomeFill className=" text-xl mt-1  "/>
        :
        <GoHome className="text-xl mt-1  " /> 
        }


        <span className="lg:hidden  ">Home</span>
      </Link>
      <Link

        to={"/search"}
        className={`${urlAtual ==='#/search'?'transition-all text-rose-600':'text-neutral-900'}  justify-center gap-1 items-center flex flex-col w-1/4 `}
      >
        <BiSearch className="text-xl mt-1  " />


        <span className="lg:hidden  ">Pesquisa</span>
      </Link>
      <Link
        to={"/pedido"}

        className={`${urlAtual ==="#/pedido"?' duration-200 transition-all text-rose-600':'text-neutral-900'}  justify-center gap-1 items-center flex flex-col w-1/4 `}
      >
        {/* <SlHandbag className="text-lg mt-1  "/> */}


        {urlAtual ==="#/pedido"?
        <FaBasketShopping className="text-lg mt-1  "/>
        

        :
        // <BiHeart className="text-xl mt-1  " />
        // <FaBagShopping className="text-base mt-1  "/>
        <FaBasketShopping className="text-base mt-1  "/>



        // <BsHandbag  className="text-lg mt-1  "/>

        }
        <span className="lg:hidden  ">Pedido</span>
      </Link>
      <a
        href={link}
        className="text-neutral-900 justify-center gap-1 items-center flex flex-col w-1/4 "
      >
        <FaWhatsapp className=" text-xl mt-1 " />
        <span className="lg:hidden  ">Contato</span>
      </a>
    </nav>
  );
}
