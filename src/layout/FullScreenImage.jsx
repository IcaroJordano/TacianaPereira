import { BiExit, BiX } from "react-icons/bi";

const FullScreenImage = ({ isOpen,image,setIsOpen }) => {
  return (
    <section className={`lg:hidden  bg-neutral-900  w-full flex justify-center items-center ${isOpen ?' h-screen absolute':'h-0'} z-50  `}>
        <button onClick={()=>{setIsOpen(false)}}>
        <BiX className={`text-white text-6xl absolute top-4 right-4 ${isOpen ?'':'h-0'} `} />

        </button>
      <img className="w-full" src={image} alt="" /> 
    </section>
  );
};

export default FullScreenImage;
