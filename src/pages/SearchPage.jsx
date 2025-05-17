import InputSearch from "../components/InputSearch";
import CategoryBar from "../layout/CategoryBar";
import ContentProducts from "../layout/search/ContentProducts";
import SlideCategory from "../layout/SlideCategory";

const SearchPage = () => {



  return (
    <section className="lg:ms-14 mb-24 lg:mb-0 lg:flex">
      <div className="lg:w-3/12 lg:mt-8 fixed lg:relative bg-white z-50 w-full top-0"> 
        <InputSearch />
      </div>
        <ContentProducts/>
     
    </section>
  );
};
export default SearchPage;
