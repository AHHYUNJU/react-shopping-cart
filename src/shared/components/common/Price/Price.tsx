import * as S from "./Price.styles";

interface PriceProps {
  name: string;
  price: number;
}

function Price({ name, price }: PriceProps) {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Price>{price.toLocaleString()}원</S.Price>
    </S.Container>
  );
}
export { Price };
