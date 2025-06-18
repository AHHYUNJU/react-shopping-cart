import * as S from "./Modal.styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <S.ModalBackDrop isModalOpen={true}>
        <S.ModalContainer>
          <button onClick={onClose}>닫기</button>
          {children}
        </S.ModalContainer>
      </S.ModalBackDrop>
    </>
  );
}
export { Modal };
