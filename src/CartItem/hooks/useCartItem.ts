import { useEffect, useState } from "react";
import getCartItem from "../services/getCartItem";
import { CartItem } from "../types/CartItem";

function useCartItem() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCartItems = async () => {
    try {
      const response = await getCartItem();
      console.log("response: ", response);
      setCartItems(response.content);
    } catch (err) {
      console.log("장바구니 아이템 불러오기 실패:", err);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return { cartItems, fetchCartItems };
}

export { useCartItem };
