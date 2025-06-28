import styled from "@emotion/styled";

export const Footer = styled.footer<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#000000" : "#BEBEBE")};
  color: #ffffff;
  width: 430px;
  height: 64px;
  align-items: center;
  flex-shrink: 0;
`;

export const Span = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  padding: 20px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
