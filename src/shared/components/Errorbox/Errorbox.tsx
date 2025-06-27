import { useErrorContext } from "@/shared/context/ErrorContext";

import * as S from "./Errorbox.styles";

function ErrorBox() {
  const { errorMessage } = useErrorContext();
  console.log(errorMessage);

  if (!errorMessage) {
    return null;
  }

  return (
    <S.Errorbox>
      <S.message>{errorMessage}</S.message>
    </S.Errorbox>
  );
}

export { ErrorBox };
