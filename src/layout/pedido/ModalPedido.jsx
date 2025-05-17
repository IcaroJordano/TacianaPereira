import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useContext, useState } from "react";
import { PedidoContext } from "../../context/PedidoContext";
import { SearchContext } from "../../context/SearchContext";
import { BiX } from "react-icons/bi";

const ModalPedido = ({ isOpen,setIsOpen }) => {
  const { setCart, cart, produtosInCart } = useContext(PedidoContext);
  const { allProdutos } = useContext(SearchContext);
  const [userName, setUserName] = useState('');

  const total = produtosInCart.reduce((acc, produto) => {
    const itemCart = cart.find((item) => item.id === produto.id);
    const qtd = itemCart?.quantidade || 0;
    return acc + qtd * produto.promo ? produto.promo : produto.price;
  }, 0);

  const mensagem = `Olá Taciana! Me chamo ${userName}\n\n
  Gostaria de fazer um pedido:\n\n${produtosInCart
    .map((produto) => {
      const itemCart = cart.find((item) => item.id === produto.id);
      const qtd = itemCart?.quantidade || 0;
      return `${qtd}x ${produto.title}`;
    })
    .join("\n")}\n\nTotal: R$ ${total.toFixed(2)}`;

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 top-0 shadow h-screen w-full flex bg-white/80  justify-center px-4 items-center">
          <div className="w-ful bg-neutral-50 py-6 rounded-lg flex flex-col px-4 ">
            <div className="justify-end flex mb-6">
              <BiX 
              onClick={()=>{setIsOpen(false)}}
               className="text-3xl  rounded-full " />
            </div>
            <p className="font-semibold text-neutral-500">
              Obrigado por comprar conosco, Voce sera redirecionado para o
              whatsapp para finalizar seu pedido, mas antes informe o seu nome
              para seguir com o pedido
            </p>
            <input
              type="text"
              className="border-b-1 my-8 py-2 focus:outline-none focus:ring-0"
              placeholder="Digite seu nome"
              value={userName}
              onChange={(e)=>{setUserName(e.target.value)}}
            />
            <a
              href={userName?`https://wa.me/558599263-8488?text=${encodeURIComponent(
                mensagem
              )}`:null}
              className={`${!userName ? "bg-neutral-500/80" : "bg-green-700/80"} border-2 px-6  mx-auto items-center py-2 rounded-lg justify-center text-lg  text-white flex`}
            >
              Finalizar Pedido
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalPedido;
