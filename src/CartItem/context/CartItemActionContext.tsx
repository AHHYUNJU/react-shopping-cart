import { createContext, useContext } from "react";

type CartItemActionContextType = {
  toggleAll: () => void;
  toggleCheck: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  getTotalPrice: () => number;
  shippingFee: (total: number) => number;
};

export const CartItemActionContext = createContext<
  CartItemActionContextType | undefined
>(undefined);

export const useCartItemActions = () => {
  const context = useContext(CartItemActionContext);
  if (!context)
    throw new Error(
      "CartItemActionContext는 CartItemProvider 내부에서 사용되어야 합니다."
    );
  return context;
};
