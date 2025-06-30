import styled from "@emotion/styled";

export const OrderCheckContent = styled.div`
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

export const ItemList = styled.div`
  width: 382px;
  top: 198px;
  left: 24px;
  padding-top: 20px;
`;

export const CouponApplyButton = styled.button`
  width: 382px;
  height: 48px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
  color: #333333bf;
  border: 1px solid #33333340;
  margin: 30px 0;
`;
