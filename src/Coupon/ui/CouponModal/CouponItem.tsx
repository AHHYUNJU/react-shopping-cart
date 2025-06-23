import { CouponResponse } from "@/Coupon/types/CouponResponse";
import * as S from "./CouponModal.styles";

type CouponItemProps = {
  coupon: CouponResponse;
  isChecked: boolean;
  onCheck: (id: number) => void;
};

function CouponItem({ coupon, isChecked, onCheck }: CouponItemProps) {
  return (
    <S.CouponItem onClick={() => onCheck(coupon.id)}>
      <input type="checkbox" checked={isChecked} readOnly />
      <div>{coupon.description}</div>
      <div>{coupon.expirationDate}</div>
    </S.CouponItem>
  );
}

export { CouponItem };
