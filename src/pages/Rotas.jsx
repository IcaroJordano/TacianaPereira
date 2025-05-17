import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import SearchPage from "./SearchPage"
import ProductDetails from "./ProductDetails"
import PedidoPage from "./PedidoPage"



export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/pedido" element={<PedidoPage />}/>
            <Route path="/produto/:id" element={<ProductDetails/>}/>
        </Routes>
    )
}