import { CartItemResponse } from "@/CartItem/types/CartItemResponse";
import { CouponResponse } from "../types/CouponResponse";
import {
  handleFixedCoupon,
  handleFreeShippingCoupon,
  handleBuyXGetY,
  handlePercentageCoupon,
} from "./couponHandler";

export function calculateCouponDiscounts(
  couponsId: number[],
  orderAmount: number,
  cartItems: CartItemResponse[],
  couponList: CouponResponse[],
  shippingFee: number,
  now: Date = new Date()
): number {
  function applyOrder(ids: number[]): number {
    return ids.reduce((total, id) => {
      const coupon = couponList.find((c) => c.id === id);
      if (!coupon) return total;

      const isValid =
        now.getTime() <= new Date(coupon.expirationDate).getTime();
      if (!isValid) return total;

      switch (coupon.discountType) {
        case "fixed":
          return total + handleFixedCoupon(coupon, orderAmount);
        case "freeShipping":
          return (
            total + handleFreeShippingCoupon(coupon, orderAmount, shippingFee)
          );
        case "buyXgetY":
          return total + handleBuyXGetY(coupon, cartItems);
        case "percentage":
          return total + handlePercentageCoupon(coupon, orderAmount, now);
        default:
          return total;
      }
    }, 0);
  }

  if (couponsId.length === 2) {
    const [a, b] = couponsId;
    return Math.max(applyOrder([a, b]), applyOrder([b, a]));
  }

  return applyOrder(couponsId);
}
