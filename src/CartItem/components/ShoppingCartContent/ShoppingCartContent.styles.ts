import styled from "@emotion/styled";

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

export const ItemList = styled.div`
  width: 382px;
  top: 198px;
  left: 24px;
  padding-top: 20px;
`;
