import info from "../../../assets/info.png";
import * as S from "./Info.styles";

type Props = {
  message: string;
};

function Info({ message }: Props) {
  return (
    <S.Info>
      <img src={info} alt="정보 아이콘" />
      <p>{message}</p>
    </S.Info>
  );
}

export { Info };
