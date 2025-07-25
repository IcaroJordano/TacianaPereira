import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import CardProduto from "../../components/CardProduto";

const ContentProducts = () => {
  const { allProdutos, searchValue } = useContext(SearchContext);

  return (
    <div className="flex flex-wrap lg:mt-0 justify-between lg:justify-normal mt-28  gap-y-8 lg:px-5  lg:gap-x-10 pb-20">
      {allProdutos
        .filter((produto) =>
          produto.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((produto) => (
          <CardProduto
            foraDeEstoque={produto.foraDeEstoque}
            most={produto.most}
            promo={produto.promo}
            id={produto.id}
            price={produto.price}
            image={produto.image?.url}
            title={produto.title}
          />
        ))}
    </div>
  );
};

export default ContentProducts;
