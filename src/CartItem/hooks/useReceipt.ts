import { CartItemResponse } from "@/CartItem/types/CartItemResponse";

export function useReceipt(
  selectedCartItemList: CartItemResponse[],
  isRemote: boolean
) {
  const totalQuantity = selectedCartItemList.reduce(
    (acc, item) => acc + item.cartQuantity,
    0
  );

  const totalPrice = selectedCartItemList.reduce(
    (acc, item) => acc + item.cartQuantity * item.product.price,
    0
  );

  const baseShippingFee = totalPrice >= 100000 ? 0 : 3000;
  const finalShippingFee = isRemote ? baseShippingFee + 3000 : baseShippingFee;

  const finalPayment = totalPrice + finalShippingFee;

  return {
    totalQuantity,
    totalPrice,
    finalShippingFee,
    finalPayment,
  };
}
