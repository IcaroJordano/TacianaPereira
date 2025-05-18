import InputSearch from "../components/InputSearch";
import CategoryBar from "../layout/CategoryBar";
import ContentProducts from "../layout/search/ContentProducts";
import SlideCategory from "../layout/SlideCategory";

const SearchPage = () => {



  return (
    <section className="lg:ms-14 mb-24 lg:mb-0 ">
      <div className="   mx-auto lg:min-w-96 flex justify-center fixed   bg-white z-50 w-full top-0"> 
        <div className="lg:w-7/12">
        <InputSearch />
        </div>
      </div>
      <div className="lg:ps-20 lg:mt-24">

        <ContentProducts/>
      </div>
     
    </section>
  );
};
export default SearchPage;
