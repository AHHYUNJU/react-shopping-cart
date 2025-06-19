import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { CartItemResponse } from "../types/CartItemResponse";
import { getCartItem } from "../services/getCartItem";
import { patchCartItem } from "../services/patchCartItem";
import { deleteCartItem } from "../services/deleteCartItem";

type CartItemContextType = {
  cartItemList: CartItemResponse[];
  isAllChecked: boolean;
  updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
  toggleAll: () => void;
  toggleCheck: (id: number) => void;
  getTotalPrice: () => number;
  shippingFee: (totalPrice: number) => number;
};

export const CartItemContext = createContext<CartItemContextType | undefined>(
  undefined
);
export const CartItemProvider = ({ children }: { children: ReactNode }) => {
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

  const value = useMemo<CartItemContextType>(
    () => ({
      cartItemList: cartItems,
      isAllChecked,
      updateCartItemQuantity,
      removeCartItem,
      toggleAll,
      toggleCheck,
      getTotalPrice,
      shippingFee,
    }),
    [cartItems, isAllChecked]
  );

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};

export const useCartItemContext = () => {
  const context = useContext(CartItemContext);
  if (!context) {
    throw new Error(
      "useCartItemContext는 CartItemProvider 내부에서 사용되어야 합니다."
    );
  }
  return context;
};
