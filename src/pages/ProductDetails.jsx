import { FaMinus, FaPlus } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SkelletonDesc from "../components/SkelletonDesc";
import FullScreenImage from "../layout/FullScreenImage";
import { PedidoContext } from "../context/PedidoContext";
import AdicionarProduto from "../layout/details/AdicionarProduto";

const ProductDetails = () => {
  const { id } = useParams();


  const [isOpen, setIsOpen] = useState(false);

  const { produtosFiltered } = useContext(SearchContext);
  const { addToCart } = useContext(PedidoContext);

  const produto = produtosFiltered.find((produto) =>
    produto.id.toLowerCase().includes(id.toLowerCase())
  );

  

  return (
    <section className="relative min-h-screen text-lg z-40 bg-white">
      <FullScreenImage
        image={produto?.image?.url}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <Link to={"/"}>
        <MdKeyboardArrowLeft className=" top-4 z-40  shadow-lg  rounded-full left-4 text-4xl fixed p-1 w-10 h-10 text-rose-500 bg-neutral-50" />
      </Link>

      <button
        className="h-80 w-full object-cover "
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <img
          className="h-80 bg-neutral-400 w-full object-cover "
          src={
            produto?.image?.url }
          alt=""
        />
      </button>


      <div className="relative bg-white -top-4 pb-20 p-4 flex flex-col gap-4  rounded-t-2xl pt-8">
        <h2>{produto?.title}</h2>
        {produto?.descricao ? (
          <p className="font-light">{produto?.descricao}</p>
        ) : (
          <SkelletonDesc />
        )}
        <div className="flex">
          {produto?.promo ? (
            <>
              <p className="mt-1 line-through mr-2 text-neutral-950/40 ">
                R$ {produto?.price?.toFixed(2) || "null"}
              </p>
              <p className="mt-1">R$ {produto?.promo?.toFixed(2) || "null"}</p>
            </>
          ) : (
            <p className="mt-1">R$ {produto?.price?.toFixed(2) || '0,00'}</p>
          )}
        </div>
      </div>

      <AdicionarProduto produto={produto} />
    </section>
  );
};

export default ProductDetails;
