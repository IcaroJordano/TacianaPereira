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
    <section className="lg:ms-14 min-h-screen lg:flex  text-lg relative z-50 bg-white">
      <FullScreenImage
        image={produto?.image?.url}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className=" lg:w-9/12  lg:mx-auto lg:flex   lg:pt-22 lg:ps-22 lg:pr-12   ">
        <Link to={"/"}>
          <MdKeyboardArrowLeft className=" lg:-top-5 top-4 z-40  shadow-lg  rounded-full  left-4 text-4xl lg:relative fixed p-1 w-10 h-10 text-rose-500 bg-neutral-50" />
        </Link>

        <button
          className="h-80 w-full object-cover "
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img
            className="h-80 overflow-hidden lg:hover:scale-110 transition-all duration-200 hover:cursor-zoom-in lg:rounded-lg lg:h-[511px] bg-neutral-400 lg:w-96  w-full object-cover "
            src={produto?.image?.url}
            alt=""
          />
        </button>

        <div className="relative  -top-4 lg:p-0 max-h-1/2  pb-20  lg:pt-28 bg-white   rounded-t-2xl pt-8">
          <div className="flex flex-col gap-4 p-4">
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
                  <p className="mt-1">
                    R$ {produto?.promo?.toFixed(2) || "null"}
                  </p>
                </>
              ) : (
                <p className="mt-1">
                  R$ {produto?.price?.toFixed(2) || "0,00"}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4  ">

          <AdicionarProduto produto={produto} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
