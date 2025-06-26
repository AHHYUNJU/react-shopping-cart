import { CouponResponse } from "@/Coupon/types/CouponResponse";

export function isCouponDisabled(
  coupon: CouponResponse,
  orderAmount: number,
  now: Date
): boolean {
  const isExpired = now.getTime() > new Date(coupon.expirationDate).getTime();

  if (
    coupon.discountType === "fixed" ||
    coupon.discountType === "freeShipping"
  ) {
    return isExpired || orderAmount < coupon.minimumAmount;
  }

  if (coupon.discountType === "percentage") {
    const [startHour] = coupon.availableTime.start.split(":").map(Number);
    const [endHour] = coupon.availableTime.end.split(":").map(Number);
    const currentHour = now.getHours();
    return isExpired || currentHour < startHour || currentHour >= endHour;
  }

  return isExpired;
}
