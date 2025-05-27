import { useContext, useRef, useState, useEffect } from "react";
import CardProduto from "../components/CardProduto";
import { SearchContext } from "../context/SearchContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SlideCategory = ({ title, filtro }) => {
  const { allProdutos, isLoading } = useContext(SearchContext);
  const scrollRef = useRef(null);
  const [produtosListados, setProdutosListados] = useState([]);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const resultado = filtro ? allProdutos.filter(filtro) : allProdutos;

    setProdutosListados(resultado);
    console.log(resultado);
  }, [filtro, allProdutos]);

  useEffect(() => {
    checkScrollPosition();

    const handleResize = () => checkScrollPosition();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [allProdutos]);

  useEffect(() => {
    // Executa assim que produtosListados mudar e o scrollRef existir
    const timeout = setTimeout(() => {
      checkScrollPosition();
    }, 100); // pequeno delay para garantir que DOM já foi renderizado

    return () => clearTimeout(timeout);
  }, [produtosListados]);

  return (
    <section className="relative ps-4 mb-8">
      {produtosListados.length > 0 && (
        <>
          <h1 className="text-lg lg:text-2xl text-neutral-700 font-semibold mb-4">
            {title}
          </h1>

          {/* Botões de navegação */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden lg:flex absolute z-10 left-8 top-1/2 shadow-2xl -translate-y-9 h-10 w-10 bg-neutral-50 rounded-full items-center justify-center bg-gradient-to-r from-white to-transparent"
            >
              <MdChevronLeft className="text-3xl text-gray-500 hover:text-gray-800" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden lg:flex absolute z-10 right-8 shadow-lg top-1/2 -translate-y-9 h-10 w-10 bg-neutral-50 rounded-full items-center justify-center bg-gradient-to-l from-white to-transparent opacity-90"
            >
              <MdChevronRight className="text-3xl text-gray-500 hover:text-gray-800" />
            </button>
          )}

          {/* Slide horizontal */}
          <div
            ref={scrollRef}
            onScroll={checkScrollPosition}
            style={{ scrollbarWidth: "none" }}
            className="overflow-x-auto scroll-smooth scrollbar-hide"
          >
            <div className="flex flex-nowrap gap-4 px-1">
              {(filtro ? allProdutos.filter(filtro) : allProdutos).map(
                (produto) => (
                  <CardProduto
                    key={produto.id}
                    most={produto.most}
                    foraDeEstoque={produto.foraDeEstoque}
                    promo={produto.promo}
                    id={produto.id}
                    price={produto.price}
                    image={produto.image?.url}
                    title={produto.title}
                  />
                )
              )}
              {isLoading && (
                <>
                  <CardProduto />
                  <CardProduto />
                  <CardProduto />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SlideCategory;
