import React from "react";
import * as S from "./Checkbox.styles";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox(props: CheckboxProps) {
  return <S.Checkbox {...props} />;
}
