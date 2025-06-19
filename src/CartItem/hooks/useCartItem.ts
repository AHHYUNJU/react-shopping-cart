import { useEffect, useState } from "react";
import { getCartItem } from "../services/getCartItem";
import { patchCartItem } from "../services/patchCartItem";
import { CartItemResponse } from "../types/CartItemResponse";
import { deleteCartItem } from "../services/deleteCartItem";

function useCartItem() {
  const [cartItems, setCartItems] = useState<CartItemResponse[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(true);

  const fetchCartItems = async () => {
    try {
      const response = await getCartItem();
      setCartItems((prev) =>
        response.content.map((newItem: CartItemResponse) => {
          const prevItem = prev.find((item) => item.id === newItem.id);
          return {
            ...newItem,
            isChecked: prevItem ? prevItem.isChecked : true,
          };
        })
      );
    } catch (err) {
      console.log("장바구니 아이템 불러오기 실패:", err);
    }
  };

  const updateCartItemQuantity = async (id: number, quantity: number) => {
    try {
      if (quantity === 0) {
        await deleteCartItem(id);
      } else {
        await patchCartItem(id, quantity);
      }
      await fetchCartItems();
    } catch (err) {
      console.log("장바구니 수량 수정 실패:", err);
    }
  };

  const removeCartItem = async (id: number) => {
    try {
      await deleteCartItem(id);
      await fetchCartItems();
    } catch (err) {
      console.log("장바구니 아이템 삭제 실패:", err);
    }
  };

  const toggleAll = () => {
    setCartItems((prev) =>
      prev.map((item) => ({ ...item, isChecked: !isAllChecked }))
    );
    setIsAllChecked((prev) => !prev);
  };

  const toggleCheck = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems
      .filter((item) => item.isChecked)
      .reduce((acc, item) => acc + item.product.price * item.cartQuantity, 0);
  };

  const shippingFee = (getTotalPrice: number) => {
    if (getTotalPrice > 100000) {
      return 0;
    }
    return 3000;
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    const allChecked =
      cartItems.length > 0 && cartItems.every((item) => item.isChecked);
    setIsAllChecked(allChecked);
  }, [cartItems]);

  return {
    cartItems,
    fetchCartItems,
    updateCartItemQuantity,
    removeCartItem,
    toggleAll,
    isAllChecked,
    toggleCheck,
    getTotalPrice,
    shippingFee,
  };
}

export { useCartItem };
