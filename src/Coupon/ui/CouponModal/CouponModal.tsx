import { useEffect } from "react";
import { Modal } from "@/shared/component/Modal/Modal";
import * as S from "./CouponModal.styles";
import { useCouponContext } from "@/Coupon/context/CouponContext";
import { CouponItem } from "./CouponItem";
import closeButton from "../../../assets/closeButton.png";
import { Info } from "@/shared/component/Info/Info";
import { Hr } from "@/shared/component/Hr/Hr";
import { isCouponDisabled } from "./isCouponDisabled";
import { calculateCouponDiscounts } from "@/Coupon/utils/calculateCouponDiscount";
import { CartItemResponse } from "@/CartItem/types/CartItemResponse";

type CouponModalProps = {
  isOpen: boolean;
  onClose: () => void;
  allProductPrice: number;
  cartItems: CartItemResponse[];
  shippingFee: number;
  onDiscountChange: (amount: number) => void;
};

function CouponModal({
  isOpen,
  onClose,
  allProductPrice,
  cartItems,
  shippingFee,
  onDiscountChange,
}: CouponModalProps) {
  const { couponList, checkedCoupons, setCheckedCoupons } = useCouponContext();

  const handleCheck = (id: number) => {
    const isChecked = checkedCoupons.includes(id);

    if (isChecked) {
      setCheckedCoupons(checkedCoupons.filter((c) => c !== id));
    } else if (checkedCoupons.length < 2) {
      setCheckedCoupons([...checkedCoupons, id]);
    }
  };

  const now = new Date();

  const discountAmount = calculateCouponDiscounts(
    checkedCoupons,
    allProductPrice,
    cartItems,
    couponList,
    shippingFee,
    now
  );

  useEffect(() => {
    const amount = calculateCouponDiscounts(
      checkedCoupons,
      allProductPrice,
      cartItems,
      couponList,
      shippingFee,
      now
    );
    onDiscountChange(amount);
  }, [checkedCoupons, allProductPrice, cartItems, couponList, shippingFee]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={
        <S.ModalHeader>
          <S.Title>쿠폰을 선택해 주세요</S.Title>
          <S.CloseButton src={closeButton} onClick={onClose} />
        </S.ModalHeader>
      }
    >
      <Info message="쿠폰은 최대 2개까지 사용할 수 있습니다." />
      {couponList.length > 0 ? (
        <S.CouponContent>
          {couponList.map((coupon) => (
            <div key={coupon.id}>
              <Hr />
              <CouponItem
                coupon={coupon}
                isChecked={checkedCoupons.includes(coupon.id)}
                isDisabled={
                  !checkedCoupons.includes(coupon.id) &&
                  (checkedCoupons.length >= 2 ||
                    isCouponDisabled(coupon, allProductPrice, now))
                }
                onCheck={handleCheck}
              />
            </div>
          ))}
        </S.CouponContent>
      ) : (
        <p>사용 가능한 쿠폰이 없습니다</p>
      )}
      <S.ApplyButton onClick={onClose}>
        총 {discountAmount.toLocaleString()}원 할인 쿠폰 사용하기
      </S.ApplyButton>
    </Modal>
  );
}

export { CouponModal };
