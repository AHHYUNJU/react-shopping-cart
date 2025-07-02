import { Checkbox } from "../../common/Checkbox/Checkbox";

import * as S from "./Shipping.styles";
interface ShippingProps {
  isRemote: boolean;
  onRemoteChange: (checked: boolean) => void;
}
function Shipping({ isRemote, onRemoteChange }: ShippingProps) {
  return (
    <section>
      <S.Title>배송 정보</S.Title>
      <S.Wrapper>
        <Checkbox
          type="checkbox"
          checked={isRemote}
          onChange={(e) => onRemoteChange(e.target.checked)}
        />
        <S.Option>제주도 및 도서 산간 지역</S.Option>
      </S.Wrapper>
    </section>
  );
}
export { Shipping };
