import { useEffect, useMemo, useState } from "react";
import { CartItemStateContext } from "./CartItemStateContext";
import { CartItemActionContext } from "./CartItemActionContext";
import { useCartItemHandlers } from "../hooks/useCartItemHandlers";
import type { CartItemResponse } from "../types/CartItemResponse";

export const CartItemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItemResponse[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(true);

  const { fetchCartItems, updateCartItemQuantity, removeCartItem } =
    useCartItemHandlers(setCartItems);

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    const allChecked =
      cartItems.length > 0 && cartItems.every((item) => item.isChecked);
    setIsAllChecked(allChecked);
  }, [cartItems]);

  const stateValue = useMemo(
    () => ({
      cartItemList: cartItems,
      isAllChecked,
    }),
    [cartItems, isAllChecked]
  );

  const actionsValue = useMemo(
    () => ({
      toggleAll: () => {
        setCartItems((prev) =>
          prev.map((i) => ({ ...i, isChecked: !isAllChecked }))
        );
        setIsAllChecked((prev) => !prev);
      },
      toggleCheck: (id: number) => {
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
          )
        );
      },
      updateCartItemQuantity,
      removeCartItem,
      getTotalPrice: () =>
        cartItems
          .filter((i) => i.isChecked)
          .reduce(
            (acc, item) => acc + item.product.price * item.cartQuantity,
            0
          ),
      shippingFee: (total: number) => (total > 100000 ? 0 : 3000),
    }),
    [cartItems, isAllChecked, updateCartItemQuantity, removeCartItem]
  );

  return (
    <CartItemStateContext.Provider value={stateValue}>
      <CartItemActionContext.Provider value={actionsValue}>
        {children}
      </CartItemActionContext.Provider>
    </CartItemStateContext.Provider>
  );
};
