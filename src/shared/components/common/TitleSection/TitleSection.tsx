import * as S from "./TitleSection.styles";

type TitleSectionProps = {
  title: string;
  subTexts: string[];
  align?: "left" | "center" | "right";
};

function TitleSection({ title, subTexts, align = "left" }: TitleSectionProps) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.SubText align={align}>
        {subTexts.map((text, idx) => (
          <span key={idx}>{text}</span>
        ))}
      </S.SubText>
    </>
  );
}

export { TitleSection };
