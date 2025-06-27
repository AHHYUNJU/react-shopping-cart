import React from "react";
import * as S from "./Checkbox.styles";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Checkbox(props: CheckboxProps) {
  return <S.Checkbox {...props} />;
}

export { Checkbox };
