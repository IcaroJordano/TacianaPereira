import axios from "axios";
import { useState, createContext, useEffect, useRef } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [allProdutos, setAllProdutos] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [produtosFiltered, setProdutosFiltered] = useState([]);
  const [idFilter, setIdFilter] = useState("General");
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeSearch = (valor) => {
    setSearchValue(valor);
  };

  useEffect(() => {
    setProdutosFiltered(
      allProdutos.filter((component) =>
        component.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return;

    fetchedOnce.current = true;
    setIsLoading(true);
    setIsLoading(true);
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
              {    
              allProdutos(first: 500) {
              id
              price
              descricao
              category
              most
              promo
                title
                most
                image{
                url}

            } } 
                `,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Icaro Jordano 7e0066b07428f2517acf323dfe87f3`,
          },
        }
      )
      .then((res) => {
        setAllProdutos(res.data.data["allProdutos"]);
        setProdutosFiltered(res.data.data["allProdutos"]);
        console.log(res.data.data["allProdutos"]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, [1000]);
      });
  }, []);

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
              {    
              allCategories{
              category
            } } 
                `,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Icaro Jordano 7e0066b07428f2517acf323dfe87f3`,
          },
        }
      )
      .then((res) => {
        setAllCategories(res.data.data["allCategories"]);
        // setProdutosFiltered(res.data.data["allProdutos"]);
        console.log(res.data.data["allCategories"],a);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, [1000]);
      });
  }, []);

  return (
    <SearchContext.Provider
      value={{
        idFilter,
        setIdFilter,
        isLoading,
        produtosFiltered,
        setProdutosFiltered,
        searchValue,
        onChangeSearch,
        setSearchValue,
        allProdutos,
        setAllProdutos,
        allCategories,selectedCategory, setSelectedCategory
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
