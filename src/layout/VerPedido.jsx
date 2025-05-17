import { useContext } from "react";
import { BiHeart, BiHome, BiHomeAlt, BiSearch } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { PedidoContext } from "../context/PedidoContext";
import { SearchContext } from "../context/SearchContext";

export function VerPedido({}) {
  const { setCart, cart, produtosInCart } = useContext(PedidoContext);

  const totalItens = cart.reduce((acc, item) => acc + item.quantidade, 0);

  const total = produtosInCart.reduce((acc, produto) => {
    const itemCart = cart.find((item) => item.id === produto.id);
    const qtd = itemCart?.quantidade || 0;
    return (acc + qtd * (produto.promo?produto.promo:produto.price))
  }, 0);
  return (<>
    {total > 1 && (<div
        className={` z-10 fixed bottom-14 text-neutral-500  w-full lg:w-14 border-e border-neutral-200 lg:shadow shadow-2xl lg:justify-center items-center lg:gap-8 justify-around  lg:flex-col h-14 lg:h-full flex bg-white`}
      >
        <p className="text-sm flex flex-col">
          <span>Total Sem Entrega</span>
          <div>
            <span className="font-semibold text-base text-black">R$ {total.toFixed(2)} </span>
            <span>/ {totalItens} itens</span>
          </div>
        </p>
  
        <Link to={'/pedido'} className="bg-rose-600  text-white justify-between items-center px-10  h-10 my-auto rounded-lg ms-2  flex ">
          Ver Pedido
        </Link>
      </div>)}</>
  );
}
