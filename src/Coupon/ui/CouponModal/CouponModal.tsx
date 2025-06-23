import { Modal } from "@/shared/component/Modal/Modal";
import * as S from "./CouponModal.styles";
import { useCouponContext } from "@/Coupon/context/CouponContext";
import { CouponItem } from "./CouponItem";

type CouponModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function CouponModal({ isOpen, onClose }: CouponModalProps) {
  const { couponList, checkedCoupons, setCheckedCoupons } = useCouponContext();

  const handleCheck = (id: number) => {
    setCheckedCoupons([id]);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={
        <S.ModalHeader>
          <p>쿠폰을 선택해 주세요</p>
          <button onClick={onClose}>닫기</button>
        </S.ModalHeader>
      }
    >
      {couponList.length > 0 ? (
        <S.CouponContent>
          {couponList.map((c) => (
            <CouponItem
              key={c.id}
              coupon={c}
              isChecked={checkedCoupons.includes(c.id)}
              onCheck={handleCheck}
            />
          ))}
        </S.CouponContent>
      ) : (
        <p>사용 가능한 쿠폰이 없습니다</p>
      )}
    </Modal>
  );
}

export { CouponModal };
