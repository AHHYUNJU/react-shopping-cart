import { Modal } from "@/shared/component/Modal/Modal";
import * as S from "./CouponModal.styles";
import { useCouponContext } from "@/Coupon/context/CouponContext";

type CouponModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function CouponModal({ isOpen, onClose }: CouponModalProps) {
  const { couponList } = useCouponContext();
  return (
    <>
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
              <S.CouponItem key={c.id}>
                <div>{c.description}</div>
                <div>{c.expirationDate}</div>
              </S.CouponItem>
            ))}
          </S.CouponContent>
        ) : (
          <p>사용 가능한 쿠폰이 없습니다</p>
        )}
      </Modal>
    </>
  );
}

export { CouponModal };
