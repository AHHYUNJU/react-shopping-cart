import { Modal } from "@/shared/component/Modal/Modal";
import * as S from "./CouponModal.styles";
import { useCouponContext } from "@/Coupon/context/CouponContext";
import { CouponItem } from "./CouponItem";
import closeButton from "../../../assets/closeButton.png";
import { Info } from "@/shared/component/Info/Info";
import { Hr } from "@/shared/component/Hr/Hr";

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
          <S.Title>쿠폰을 선택해 주세요</S.Title>
          <S.CloseButton src={closeButton} onClick={onClose} />
        </S.ModalHeader>
      }
    >
      <Info message="쿠폰은 최대 2개까지 사용할 수 있습니다." />
      {couponList.length > 0 ? (
        <S.CouponContent>
          {couponList.map((c) => (
            <div key={c.id}>
              <Hr />
              <CouponItem
                coupon={c}
                isChecked={checkedCoupons.includes(c.id)}
                onCheck={handleCheck}
              />
            </div>
          ))}
        </S.CouponContent>
      ) : (
        <p>사용 가능한 쿠폰이 없습니다</p>
      )}
      <S.ApplyButton>총 5,000원 할인 쿠폰 사용하기</S.ApplyButton>
    </Modal>
  );
}

export { CouponModal };
