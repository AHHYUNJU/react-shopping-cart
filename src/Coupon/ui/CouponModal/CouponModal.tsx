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
      <Modal isOpen={isOpen} onClose={onClose}>
        <S.ModalContent>
          {couponList.length > 0 ? (
            <ul>
              {couponList.map((c) => (
                <li key={c.id}>{c.code}</li>
              ))}
            </ul>
          ) : (
            <p>사용 가능한 쿠폰이 없습니다</p>
          )}
        </S.ModalContent>
      </Modal>
    </>
  );
}

export { CouponModal };
