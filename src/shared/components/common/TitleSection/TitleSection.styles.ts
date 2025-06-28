import styled from "@emotion/styled";

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 15px;
`;

export const SubText = styled.p<{ align: "left" | "center" | "right" }>`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: ${({ align }) => align};
`;
