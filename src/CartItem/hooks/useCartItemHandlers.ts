import { getCartItem } from "../services/getCartItem";
import { patchCartItem } from "../services/patchCartItem";
import { deleteCartItem } from "../services/deleteCartItem";
import { CartItemResponse } from "../types/CartItemResponse";

export const useCartItemHandlers = (
  setCartItems: React.Dispatch<React.SetStateAction<CartItemResponse[]>>
) => {
  const fetchCartItems = async () => {
    const response = await getCartItem();
    setCartItems((prev) =>
      response.content.map((newItem: { id: number }) => {
        const prevItem = prev.find((item) => item.id === newItem.id);
        return {
          ...newItem,
          isChecked: prevItem ? prevItem.isChecked : true,
        };
      })
    );
  };

  const updateCartItemQuantity = async (id: number, quantity: number) => {
    if (quantity === 0) {
      await deleteCartItem(id);
    } else {
      await patchCartItem(id, quantity);
    }
    await fetchCartItems();
  };

  const removeCartItem = async (id: number) => {
    await deleteCartItem(id);
    await fetchCartItems();
  };

  return {
    fetchCartItems,
    updateCartItemQuantity,
    removeCartItem,
  };
};
