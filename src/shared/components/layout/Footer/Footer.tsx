import * as S from "./Footer.styles";
import { FooterProps } from "./Footer.types";

function Footer({ text, active = false, handleClick }: FooterProps) {
  return (
    <S.Footer active={active}>
      <button disabled={!active} onClick={handleClick}>
        <span>{text}</span>
      </button>
    </S.Footer>
  );
}

export { Footer };
