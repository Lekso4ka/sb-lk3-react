import { createContext } from "react";

export const FavCtx = createContext({
    favorites: [],
    setFavorites: () => {}
});