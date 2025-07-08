import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useContext, useState } from "react";
import { PedidoContext } from "../../context/PedidoContext";
import { SearchContext } from "../../context/SearchContext";
import { BiX } from "react-icons/bi";

const ModalPedido = ({ isOpen, setIsOpen }) => {
  const { setCart, cart, produtosInCart } = useContext(PedidoContext);
  const { allProdutos } = useContext(SearchContext);
  const [userName, setUserName] = useState("");

  const total = produtosInCart.reduce((acc, produto) => {
    const itemCart = cart.find((item) => item.id === produto.id);
    const qtd = itemCart?.quantidade || 0;
    const preco = produto.promo ?? produto.price; // usa promo se existir, senão price
    return acc + qtd * preco;
  }, 0);

  const mensagem = `Olá Taciana! Me chamo ${userName}\n\n
  Gostaria de fazer um pedido:\n\n${produtosInCart
    .map((produto) => {
      const itemCart = cart.find((item) => item.id === produto.id);
      const qtd = itemCart?.quantidade || 0;
      return `${qtd}x ${produto.title}`;
    })
    .join("\n")}\n\nTotal: R$ ${total?.toFixed(2)}`;

  const numero = "5585992638488";
  const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
  const link = isMobile
    ? `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    : `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
        mensagem
      )}`;

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 top-0 shadow h-screen w-full flex bg-white/80  justify-center px-4 items-center">
          <div className="lg:w-6/12 w-ful bg-neutral-50 lg:py-16  py-6 rounded-lg flex flex-col px-4 ">
            <div className="justify-end flex mb-6">
              <BiX
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-3xl cursor-pointer  rounded-full "
              />
            </div>
            <p className="font-semibold text-neutral-500 lg:w-9/12 mx-auto">
              Obrigado por comprar conosco, Voce sera redirecionado para o
              whatsapp para finalizar seu pedido, mas antes informe o seu nome
              para seguir com o pedido
            </p>
            <input
              type="text"
              className="border-b-1 my-8 py-2 lg:w-9/12 lg:mx-auto focus:outline-none focus:ring-0"
              placeholder="Digite seu nome"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <a
              target="_blank"
              href={link}
              rel="noopener noreferrer"
              className={`${
                !userName ? "bg-neutral-500/80" : "bg-green-700/80"
              } border-2 px-6 lg:mt-4 mx-auto items-center py-2 rounded-lg justify-center text-lg  text-white flex`}
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
