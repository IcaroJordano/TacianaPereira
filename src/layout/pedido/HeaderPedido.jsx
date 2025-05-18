import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useContext } from 'react';
import { PedidoContext } from '../../context/PedidoContext';


const HeaderPedido = ()=>{
  const { setCart } = useContext(PedidoContext);

    return(
        <div className="fixed top-0 shadow h-14 flex bg-white  w-full px-4 items-center">
        <Link to={'/'} >
          <MdKeyboardArrowLeft className="text-3xl " />
        </Link>
        <span className="mx-auto absolute left-1/2  -translate-x-1/2 lg:-translate-x-22 ">
          Pedido
        </span>
        <button onClick={()=>{setCart([])}} className="text-rose-500 absolute right-4 lg:right-20 ">Limpar</button>
      </div>
    )
    
}
export default HeaderPedido