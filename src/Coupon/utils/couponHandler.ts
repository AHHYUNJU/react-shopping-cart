import { CartItemResponse } from "@/CartItem/types/CartItemResponse";
import {
  FixedCoupon,
  BuyXGetYCoupon,
  FreeShippingCoupon,
  PercentageCoupon,
} from "../types/CouponResponse";

export function handleFixedCoupon(
  coupon: FixedCoupon,
  orderAmount: number
): number {
  if (coupon.minimumAmount == null || orderAmount >= coupon.minimumAmount) {
    return coupon.discount;
  }
  return 0;
}

export function handleBuyXGetY(
  coupon: BuyXGetYCoupon,
  cartItems: CartItemResponse[]
): number {
  const eligibleItems = cartItems.filter(
    (item) => item.cartQuantity > (coupon.buyQuantity ?? 0)
  );

  if (eligibleItems.length === 0) return 0;

  const maxItem = eligibleItems.reduce((a, b) =>
    a.product.price > b.product.price ? a : b
  );

  return maxItem.product.price * (coupon.getQuantity ?? 0);
}

export function handleFreeShippingCoupon(
  coupon: FreeShippingCoupon,
  orderAmount: number,
  shippingFee: number
): number {
  if (coupon.minimumAmount == null || orderAmount >= coupon.minimumAmount) {
    return shippingFee;
  }
  return 0;
}

export function handlePercentageCoupon(
  coupon: PercentageCoupon,
  orderAmount: number,
  now: Date
): number {
  const [startHour] = coupon.availableTime.start.split(":").map(Number);
  const [endHour] = coupon.availableTime.end.split(":").map(Number);
  const currentHour = now.getHours();

  if (currentHour >= startHour && currentHour < endHour) {
    return Math.floor(orderAmount * coupon.discount);
  }

  return 0;
}
