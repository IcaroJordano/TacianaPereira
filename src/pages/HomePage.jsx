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
  const { allCategories, selectedCategory, isLoading,setSelectedCategory } =
    useContext(SearchContext);

  return (
    <section className="lg:ms-14 pb-28   bg-neutral-50">
      <Header />
      <div className="w-full pt-2 ">
        <CategoryBar />
      </div>
      <div className=" pt-8">
        {selectedCategory==='' ? (
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
              filtro={(produto) => (produto.category === selectedCategory ? produto : null)}
            />

          </>
        )}

        {isLoading && 
         (
          <>
            <SlideCategory
              title={'...'}
            />

          </>
        )
        }
      </div>
    </section>
  );
};
export default HomePage;
