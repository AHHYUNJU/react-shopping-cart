import * as S from "./Header.styles";

interface HeaderProps {
  children?: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <S.Header>
      <S.Span>{children}</S.Span>
    </S.Header>
  );
}

export { Header };
