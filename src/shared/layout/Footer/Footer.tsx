import * as S from "./Footer.styles";
import { FooterProps } from "./Footer.types";

function Footer({ text, active = false, handleClick }: FooterProps) {
  return (
    <S.Footer active={active}>
      <S.Button onClick={handleClick}>
        <S.Span>{text}</S.Span>
      </S.Button>
    </S.Footer>
  );
}

export { Footer };
