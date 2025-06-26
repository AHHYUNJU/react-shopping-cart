import { Checkbox } from "@/shared/component/Checkbox/Checkbox";
import { formatDate } from "@/Coupon/utils/format";
import * as S from "./CouponModal.styles";
import { CouponInfoRender } from "./CouponInfoRender";
import { CouponItemProps } from "./CouponItemProps";

function CouponItem({
  coupon,
  isChecked,
  isDisabled,
  onCheck,
}: CouponItemProps) {
  const { id, description, expirationDate } = coupon;

  const handleClick = () => {
    if (isDisabled) return;
    onCheck(id);
  };

  return (
    <S.CouponItem
      onClick={handleClick}
      style={{ opacity: isDisabled ? 0.4 : 1 }}
    >
      <S.CouponToolbar>
        <Checkbox type="checkbox" checked={isChecked} disabled={isDisabled} />
        <S.Name>{description}</S.Name>
      </S.CouponToolbar>
      <S.CouponInfoWrapper>
        <S.CouponInfo>만료일: {formatDate(expirationDate)}</S.CouponInfo>
        <CouponInfoRender coupon={coupon} />
      </S.CouponInfoWrapper>
    </S.CouponItem>
  );
}

export { CouponItem };
