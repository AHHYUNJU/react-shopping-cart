import { CouponResponse } from "@/Coupon/types/CouponResponse";
import { formatCurrency, formatAvailableTime } from "@/Coupon/utils/format";
import * as S from "./CouponModal.styles";

export function CouponInfoRender({ coupon }: { coupon: CouponResponse }) {
  switch (coupon.discountType) {
    case "fixed":
    case "freeShipping":
      return (
        <S.CouponInfo>
          최소 주문 금액: {formatCurrency(coupon.minimumAmount)}
        </S.CouponInfo>
      );

    case "percentage":
      return (
        <S.CouponInfo>
          사용 가능 기간: {formatAvailableTime(coupon.availableTime)}
        </S.CouponInfo>
      );

    default:
      return null;
  }
}
