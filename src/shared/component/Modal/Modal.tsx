import * as S from "./Modal.styles";

type ModalProps = {
  isOpen: boolean;
  header?: React.ReactNode;
  onClose: () => void;
  children?: React.ReactNode;
};

function Modal({ isOpen, header, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <S.ModalBackDrop isModalOpen={isOpen}>
        <S.ModalContainer>
          <div>
            {header ?? <button onClick={onClose}>닫기</button>}
            {children}
          </div>
        </S.ModalContainer>
      </S.ModalBackDrop>
    </>
  );
}
export { Modal };
