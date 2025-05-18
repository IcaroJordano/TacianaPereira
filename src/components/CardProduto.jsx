import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFireAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const CardProduto = ({ image, title, most, id, price, promo }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Link
      to={`/produto/${id}`}
      className={`min-w-40 w-40 lg:min-w-64 text-neutral-800 relative text-base flex flex-col gap-1 
        transition-all duration-700 ease-out transform 
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      {most && (
        <span className="bg-neutral-800 text-[11px] w-24 absolute top-2 left-2 opacity-80 text-white items-center rounded-lg flex p-1">
          <FaFireAlt className="text-orange-600 mr-1" />
          Mais pedido
        </span>
      )}
      <img
        className="bg-neutral-400 w-40 lg:w-64 h-40 lg:h-64 rounded-xl object-cover"
        src={image}
        alt=""
      />
      <div className="flex">
        {promo ? (
          <>
            <p className="mt-1 line-through mr-2 text-neutral-950/40 ">
              R$ {price?.toFixed(2) || "null"}
            </p>
            <p className="mt-1">R$ {promo?.toFixed(2) || "null"}</p>
          </>
        ) : (
          <p className="mt-1">R$ {price?.toFixed(2) || "null"}</p>
        )}
      </div>
      <p>{title}</p>
    </Link>
  );
};


export default CardProduto;
