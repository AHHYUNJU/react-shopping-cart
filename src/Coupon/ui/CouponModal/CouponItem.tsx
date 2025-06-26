import { CouponResponse } from "@/Coupon/types/CouponResponse";
import { Checkbox } from "@/shared/component/Checkbox/Checkbox";
import {
  formatDate,
  formatCurrency,
  formatAvailableTime,
} from "@/Coupon/utils/format";
import * as S from "./CouponModal.styles";

type CouponItemProps = {
  coupon: CouponResponse;
  isChecked: boolean;
  onCheck: (id: number) => void;
};

function CouponItem({ coupon, isChecked, onCheck }: CouponItemProps) {
  const { description, expirationDate } = coupon;
  return (
    <S.CouponItem onClick={() => onCheck(coupon.id)}>
      <S.CouponToolbar>
        <Checkbox type="checkbox" checked={isChecked} />
        <S.Name>{description}</S.Name>
      </S.CouponToolbar>
      <S.CouponInfoWrapper>
        <S.CouponInfo>만료일: {formatDate(expirationDate)}</S.CouponInfo>

        {coupon.discountType === "fixed" && (
          <>
            <S.CouponInfo>
              최소 주문 금액: {formatCurrency(coupon.minimumAmount)}
            </S.CouponInfo>
          </>
        )}

        {coupon.discountType === "freeShipping" && (
          <S.CouponInfo>
            최소 주문 금액: {formatCurrency(coupon.minimumAmount)}
          </S.CouponInfo>
        )}

        {coupon.discountType === "percentage" && (
          <S.CouponInfo>
            사용 가능 기간: {formatAvailableTime(coupon.availableTime)}
          </S.CouponInfo>
        )}
      </S.CouponInfoWrapper>
    </S.CouponItem>
  );
}

export { CouponItem };
