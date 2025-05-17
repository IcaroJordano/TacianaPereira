import { ReactNode } from "react";
import { SearchProvider } from "./SearchContext";
import { PedidoProvider } from "./PedidoContext";

export const AppProviders = ({ children }) => {
  return (
    <SearchProvider>
      <PedidoProvider>{children}</PedidoProvider>
    </SearchProvider>
  );
};
