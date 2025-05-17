import { useContext } from "react";
import CardProduto from "../components/CardProduto";
import { SearchContext } from "../context/SearchContext";

const SlideCategory = ({ title, filtro }) => {
  const { allProdutos, isLoading } = useContext(SearchContext);

  return (
    <section className="ps-4 mb-8">
      <h1 className="text-lg lg:text-2xl text-neutral-700 font-semibold mb-4">
        {title}
      </h1>

      <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div className="flex flex-nowrap gap-4 px-1 ">
          {filtro
            ? allProdutos
                .filter(filtro)
                .map((produto) => (
                  <CardProduto
                    most={produto.most}
                    promo={produto.promo}
                    id={produto.id}
                    price={produto.price}
                    image={produto.image?.url}
                    title={produto.title}
                  />
                ))
            : allProdutos.map((produto) => (
                <CardProduto
                  most={produto.most}
                  promo={produto.promo}
                  id={produto.id}
                  price={produto.price}
                  image={produto.image?.url}
                  title={produto.title}
                />
              ))}
          {isLoading && (
            <>
              <CardProduto
              />
              <CardProduto
              />
              <CardProduto
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SlideCategory;
