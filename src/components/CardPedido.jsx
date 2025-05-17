import { BiPlus } from "react-icons/bi";
import { FaMinus } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { useContext } from "react";
import { PedidoContext } from "../context/PedidoContext";

const CardPedido = ({ id, image, price, quantidade, title }) => {
  const { removeToCart, someQuantidade, subQuantidade } =
    useContext(PedidoContext);

  return (
    <div className="w-full flex justify-around items-start">
      <img className="rounded-lg w-16 h-16 object-cover " src={image} alt="" />
      <div className="flex h-16 w-5/12 flex-col justify-around">
        <p className="truncate " >{title}</p>
        <p>R${(price * quantidade).toFixed(2)}</p>
      </div>
      <div className="flex w-22 h-8  rounded-lg justify-around items-center bg-neutral-200">
        <span className="text-rose-500">
          {quantidade > 1 ? (
            <FaMinus
              onClick={() => {
                subQuantidade(id);
              }}
            />
          ) : (
            <ImBin
              onClick={() => {
                removeToCart(id);
              }}
              className="text-rose-500"
            />
          )}
        </span>
        {quantidade}
        <BiPlus
          onClick={() => {
            someQuantidade(id);
          }}
          className="text-rose-500"
        />
      </div>
    </div>
  );
};
export default CardPedido;
