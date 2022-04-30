import { createContext } from "react";

export const ProdCtx = createContext({
    products: [],
    text: "",
    setText: () => {},
    setProducts: () => {},
    search: () => {}
});