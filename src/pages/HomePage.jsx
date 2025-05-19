import { useContext } from "react";
import CategoryBar from "../layout/CategoryBar";
import { CategoryHome } from "../layout/CategoryHome";
import ContentCategory from "../layout/ContentCategory";
import Header from "../layout/Header";
import SlideCategory from "../layout/SlideCategory";
import SlideHome from "../layout/SlideHome";
import { SearchContext } from "../context/SearchContext";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const HomePage = () => {
  const { allCategories, selectedCategory, isLoading, setSelectedCategory } =
    useContext(SearchContext);

  return (
    <section className=" min-h-screen lg:ms-14 pb-28   bg-neutral-50">
      <div className="flex shadow-md flex-col lg:flex-row lg:items-end justify-between ">
        <div className="lg:w-6/12">
        <Header />

        </div>
        <div className="lg:w-5/12 flex pt-2 lg:mr-8  justify-end   right-0">
          <CategoryBar />
        </div>
      </div>
      <div className=" pt-8">
        {selectedCategory === "" ? (
          <>
            <SlideCategory
              title={"Mais Pedidos"}
              filtro={(produto) => (produto.most === true ? produto : null)}
            />
            <SlideCategory title={"Todos os Produtos"} />

            {allCategories.map((category) => (
              <SlideCategory
                title={category.category}
                filtro={(produto) =>
                  produto.category
                    .toLowerCase()
                    .includes(category.category.toLowerCase())
                }
              />
            ))}
          </>
        ) : (
          <>
            <SlideCategory
              title={selectedCategory}
              filtro={(produto) =>
                produto.category === selectedCategory ? produto : null
              }
            />
          </>
        )}

        {isLoading && (
          <>
            <SlideCategory title={"..."} />
          </>
        )}
      </div>
    </section>
  );
};
export default HomePage;
