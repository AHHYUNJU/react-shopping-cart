import { CouponResponse } from "@/Coupon/types/CouponResponse";

export type CouponItemProps = {
  coupon: CouponResponse;
  isChecked: boolean;
  isDisabled: boolean;
  onCheck: (id: number) => void;
};
