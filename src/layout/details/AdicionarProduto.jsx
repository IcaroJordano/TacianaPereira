import { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { PedidoContext } from "../../context/PedidoContext";

const AdicionarProduto = ({ produto }) => {
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState(1);
  const { id } = useParams();
  const { addToCart } = useContext(PedidoContext);

  const [isLoading, setIsLoading] = useState(false);

  const [finalPrice, setFinalPrice] = useState(
    produto?.promo ? produto?.promo * quantidade : produto?.price * quantidade
  );

  useEffect(() => {
    const price = produto?.promo ?? produto?.price ?? 0;
    setFinalPrice(price * quantidade);
  }, [quantidade, produto]);

  return (
    <div className=" bottom-1 w-full items-center  h-14 z-40 bg-white flex fixed ">
      <div className="w-3/12 flex ms-4  justify-around items-center">
        <button
          onClick={() => {
            setQuantidade((prev) => Math.max(1, prev - 1));
          }}
        >
          <FaMinus
            className={quantidade > 1 ? "text-rose-400" : "text-black"}
          />
        </button>
        <span>{quantidade}</span>
        <button
          onClick={() => {
            setQuantidade(quantidade + 1);
          }}
        >
          <FaPlus className="text-rose-400" />
        </button>
      </div>
      <button
        onClick={() => {
          setIsLoading(true)
          setTimeout(() => {
            addToCart({ id: id, quantidade: quantidade });
            navigate("/");
          setIsLoading(false)

          }, [1000]);
        }}
        className="bg-rose-600 text-white justify-between items-center px-4  h-12 my-auto rounded-sm ms-2 w-8/12 flex "
      >
        {!isLoading ? (
          <>
            <span>Adicionar</span>
            <span>R$ {finalPrice.toFixed(2)} </span>
          </>
        ) : (
<span className="w-6 h-6 border-2 mx-auto border-t-transparent rounded-full animate-spin inline-block"></span>
        )}
      </button>
    </div>
  );
};
export default AdicionarProduto;
