import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import CardProduto from "../../components/CardProduto";

const ContentProducts = () => {
  const { allProdutos,searchValue } = useContext(SearchContext);

  return (
    <div className="flex flex-wrap lg:mt-8 mt-28  gap-y-8 px-4 gap-7">
      {allProdutos
        .filter((produto) =>
          produto.title
            .toLowerCase()
            .includes(searchValue.toLowerCase() )
        )
        .map((produto) => (
          <CardProduto
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
