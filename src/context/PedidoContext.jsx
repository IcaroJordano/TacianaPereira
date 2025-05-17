import { useState, createContext, useEffect, useContext } from "react";
import { SearchContext } from "./SearchContext";

export const PedidoContext = createContext();

export const PedidoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [produtosInCart, setProdutosInCart] = useState([]);
  const [valores, setValores] = useState(0);
  const [isCartLoaded, setIsCartLoaded] = useState(false); // ✅ flag para controlar carregamento

  const { allProdutos } = useContext(SearchContext);

  // 🔄 Carrega o cart do localStorage na primeira renderização
  useEffect(() => {
    const cartSalvo = localStorage.getItem("cart");
    if (cartSalvo) {
      try {
        setCart(JSON.parse(cartSalvo));
      } catch (error) {
        console.error("Erro ao carregar cart do localStorage", error);
      }
    }
    setIsCartLoaded(true); // ✅ só ativa depois de tentar carregar
  }, []);

  // 💾 Salva o cart no localStorage sempre que for atualizado
  useEffect(() => {
    if (isCartLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isCartLoaded]);

  // 🧮 Atualiza produtos e total sempre que cart ou produtos mudarem
  useEffect(() => {
    if (!isCartLoaded || allProdutos.length === 0) return;

    const produtos = allProdutos.filter((produto) =>
      cart.some((item) => item.id.toLowerCase() === produto.id.toLowerCase())
    );

    setProdutosInCart(produtos);

    const total = produtos.reduce((acc, produto) => {
      const itemCart = cart.find((item) => item.id === produto.id);
      const quantidade = itemCart?.quantidade || 1;
      return acc + produto.price * quantidade;
    }, 0);

    setValores(total);
  }, [cart, allProdutos, isCartLoaded]);

  // 🛒 Adicionar item ao carrinho
  const addToCart = (novoItem) => {
    setCart((prevCart) => {
      const itemExistente = prevCart.find((item) => item.id === novoItem.id);

      if (itemExistente) {
        return prevCart.map((item) =>
          item.id === novoItem.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...novoItem, quantidade: 1 }];
      }
    });
  };

  // ❌ Remover item
  const removeToCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ➕ Somar quantidade
  const someQuantidade = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  // ➖ Subtrair quantidade
  const subQuantidade = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  return (
    <PedidoContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeToCart,
        produtosInCart,
        someQuantidade,
        subQuantidade,
        valores,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};
