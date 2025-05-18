import { FiAlertCircle } from "react-icons/fi";
import CardPedido from "../../components/CardPedido";
import { useContext } from "react";
import { PedidoContext } from "../../context/PedidoContext";

const BlockPedidos = () => {
  const { produtosInCart,cart,aumentarQuantidade,diminuirQuantidade } = useContext(PedidoContext);

  return (
    <>
      {produtosInCart.length > 0 ? (
        <div className="pt-20 flex flex-col gap-8 px-4">
          {produtosInCart.map((item) => {
            const itemCart = cart.find((cartItem) => cartItem.id === item.id);

            return (
              <CardPedido
                id={item.id}
                key={item.id}
                image={item.image?.url}
                price={item.promo?item.promo:item.price}
                quantidade={itemCart?.quantidade || 1}
                title={item.title}
              />
            );
          })}
        </div>
      ) : (
        <div className="pt-28">
          <p className="flex bg-rose-500 mx-auto rounded-sm w-11/12 animate-bounce py-3 text-white">
            <FiAlertCircle className="mx-5 text-2xl" />
            Seu pedido esta vazio
          </p>
        </div>
      )}
    </>
  );
};

export default BlockPedidos;
