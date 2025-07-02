import * as S from "./Header.styles";

interface HeaderProps {
  children?: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <S.Header>
      <span>{children}</span>
    </S.Header>
  );
}

export { Header };
