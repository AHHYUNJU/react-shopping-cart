import * as S from "./Footer.styles";

type FooterProps = {
  children?: React.ReactNode;
};

function Footer({ children }: FooterProps) {
  return (
    <S.Footer>
      <S.Span>{children}</S.Span>
    </S.Footer>
  );
}

export { Footer };
