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
`;

export const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
`;

export const ItemList = styled.div`
  width: 382px;
  height: 384px;
  top: 198px;
  left: 24px;
`;

export const ItemBox = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ItemToolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`;

export const Item = styled.div`
  width: 100%;
  height: 112px;
  gap: 24px;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 8px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 12px;
  text-align: left;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`;

export const QuantityControl = styled.div`
  width: 80px;
  height: 24px;
  gap: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    border-width: 1px;
    background-color: #ffffff;
    color: #363636;
    border: 1px solid #0000001a;
  }

  p {
    width: 24px;
    height: 15px;
    font-weight: 500;
    font-size: 12px;
  }
`;
