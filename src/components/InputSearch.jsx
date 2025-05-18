import { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { SearchContext } from "../context/SearchContext";

const InputSearch = () => {

  const { setSearchValue,searchValue } = useContext(SearchContext);



  return (
    <div
      className={`w-11/12 lg:max-w-96 mx-auto  items-center    my-4 h-12 lg:h-10        flex   transition-all duration-500  bg-neutral-50   border border-neutral-900/20  rounded-4xl py-1 lg:py-0  ps-4`}
    >
      <BiSearch className="text-rose-600 mr-1" />
      <input
      value={searchValue}
        onChange={(e)=>{setSearchValue(e.target.value)}}
        className="w-11/12 outline-none ring-0 text-neutral-800 lg:text-xs text-sm"
        placeholder="Pesquise p/ produto"
        type="text"
      />
    </div>
  );
};

export default InputSearch;
