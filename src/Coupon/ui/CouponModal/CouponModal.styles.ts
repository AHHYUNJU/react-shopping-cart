import styled from "@emotion/styled";

export const ModalHeader = styled.div`
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 30px 0;
`;

export const CouponContent = styled.div`
  align-items: left;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const CloseButton = styled.img`
  width: 14px;
  height: 14px;
`;

export const CouponItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CouponToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

export const CouponInfoWrapper = styled.div`
  gap: 24px;
  margin: 4px;
  padding: 10px 0;
`;

export const CouponInfo = styled.p`
  font-weight: 500;
  font-size: 12px;
  padding: 3px 0;
`;

export const ApplyButton = styled.button`
  background-color: #333333;
  color: #ffffff;
  width: 318px;
  height: 44px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
  margin-top: 10px;
`;
