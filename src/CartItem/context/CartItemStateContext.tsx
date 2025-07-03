import { createContext, useContext } from "react";
import type { CartItemResponse } from "../types/CartItemResponse";

type CartItemStateContextType = {
  cartItemList: CartItemResponse[];
  isAllChecked: boolean;
};

export const CartItemStateContext = createContext<
  CartItemStateContextType | undefined
>(undefined);

export const useCartItemState = () => {
  const context = useContext(CartItemStateContext);
  if (!context)
    throw new Error(
      "CartItemStateContext는 CartItemProvider 내부에서 사용되어야 합니다."
    );
  return context;
};
