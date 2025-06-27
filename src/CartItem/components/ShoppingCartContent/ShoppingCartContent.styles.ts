import styled from "@emotion/styled";

interface FlexProps {
  direction: "row" | "column";
  justifyContent?: "space-between" | "space-around";
  alignItems?: "center";
  gap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap || "0"};
`;

export const ShoppingCartContent = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0 24px;
`;

export const CartHeader = styled.div`
  width: 382px;
  height: 62px;
  top: 100px;
  left: 24px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 24px 0;
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 15px;
`;

export const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
`;
