import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { PedidoContext } from "../../context/PedidoContext";
import { SearchContext } from "../../context/SearchContext";
import ModalPedido from "./ModalPedido";

const FinalizarPedido = () => {
  const { setCart, cart, produtosInCart } = useContext(PedidoContext);
  const { allProdutos } = useContext(SearchContext);
  const [isOpen, setIsOpen] = useState(false);


  const total = produtosInCart.reduce((acc, produto) => {
    const itemCart = cart.find((item) => item.id === produto.id);
    const qtd = itemCart?.quantidade || 0;
    return acc + qtd * produto.promo ? produto.promo : produto.price;
  }, 0);

  const mensagem = `Olá! Gostaria de fazer um pedido:\n\n${produtosInCart
    .map((produto) => {
      const itemCart = cart.find((item) => item.id === produto.id);
      const qtd = itemCart?.quantidade || 0;
      return `${qtd}x ${produto.title}`;
    })
    .join("\n")}\n\nTotal: R$ ${total.toFixed(2)}`;

  const [valores, setValores] = useState(0);

  useEffect(() => {
    const produtos = allProdutos.filter((produto) =>
      cart.some((item) => item.id.toLowerCase() === produto.id.toLowerCase())
    );

    // Calcular total
    const total = produtos.reduce((acc, produto) => {
      console.log(produto);
      const itemCart = cart.find((item) => item.id === produto.id);
      const quantidade = itemCart?.quantidade || 1;
      return acc + (produto.promo ? produto.promo : produto.price) * quantidade;
    }, 0);

    setValores(total);
  }, [cart, allProdutos]);

  return (
    <>
      <div className="shadow-2xl justify-around items-center fixed bottom-0 z-50 bg-white flex w-full py-4">
        <div className="flex flex-col">
          <span>Total com entrega</span>
          <span>R$ {valores.toFixed(2)}</span>
        </div>
        <div>
          <button
            onClick={()=>{if(valores !== 0){setIsOpen(true)}}}
            className={`${
              valores == 0 ? "bg-neutral-500/80" : "bg-green-700/80"
            } border-2 px-4  mx-auto items-center py-2 rounded-lg justify-center text-lg  text-white flex`}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
      <ModalPedido isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
export default FinalizarPedido;
