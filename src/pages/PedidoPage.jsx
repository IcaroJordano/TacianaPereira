import BlockPedidos from "../layout/pedido/BlockPedidos";
import HeaderPedido from "../layout/pedido/HeaderPedido";
import FinalizarPedido from "../layout/pedido/FinalizarPedido";

const PedidoPage = () => {

  return (
    <section className="lg:ms-14 min-h-screen relative bg-white z-40">
      <HeaderPedido/>

      <BlockPedidos/>

      <FinalizarPedido/>

    </section>
  );
};
export default PedidoPage;
