import { createContext, useContext } from "react";
import { CartItemContextType } from "./CartItemContextType";

export const CartItemContext = createContext<CartItemContextType | undefined>(
  undefined
);

export const useCartItemContext = () => {
  const context = useContext(CartItemContext);
  if (!context) throw new Error("CartItemProvider 안에서 사용해야 합니다.");
  return context;
};
