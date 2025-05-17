import { Link } from "react-router-dom";

// import { CardCategory } from "./CardCategory";

export function CategoryHome({image,title,to}) {
    return (
        <Link to={to} className="relative my-8 flex" >
            <img className="h-[350px] lg:h-[430px] bg-red-500 lg:w-[440px]  w-full  object-cover" src={image} alt="" />
            <button  className="w-36  absolute bottom-4 left-1/2 -translate-x-1/2 h-12 bg-neutral-50 text-neutral-600 rounded-full shadow-lg shadow-neutral-500 lg:shadow-none lg:text-black  font-medium text-xl items-center justify-center flex mx-auto" >{title}</button>
        </Link>
    )
}