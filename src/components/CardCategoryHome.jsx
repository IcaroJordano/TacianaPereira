import { BiCake } from "react-icons/bi"
import { FaBurger } from "react-icons/fa6"
import { BsFillCake2Fill } from "react-icons/bs";

const CardCategoryHome = ({})=>{
    return(
        <div className="bg-neutral-100  flex flex-col justify-center text-neutral-700 gap-1 items-center text-[10px] lg:w-36 w-24 h-12 lg:h-16 rounded-lg ">
            <BsFillCake2Fill className="text-xl text-rose-400"/>
            <p>Category</p>
        </div>
    )
}
export default CardCategoryHome