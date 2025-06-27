import { CartItemResponse } from "../types/CartItemResponse";

export type CartItemContextType = {
  cartItemList: CartItemResponse[];
  isAllChecked: boolean;
  updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
  toggleAll: () => void;
  toggleCheck: (id: number) => void;
  getTotalPrice: () => number;
  shippingFee: (totalPrice: number) => number;
};
