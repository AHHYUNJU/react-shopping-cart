import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { ErrorBox } from "@/shared/component/Errorbox/Errorbox";
import { OrderCheckContent } from "@/CartItem/components/OrderCheckContent/OrderCheckContent";
import { useErrorContext } from "@/shared/context/ErrorContext";
import backButton from "../../assets/backButton.png";
import useCartItemList from "@/CartItem/hooks/useCartItemList";

import * as S from "./OrderCheckPage.styles";

function OrderCheckPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCartItemList = location.state?.selectedCartItemList || [];
  const [isRemote, setIsRemote] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const { state } = useCartItemList();
  const { errorMessage } = useErrorContext();

  const handleCheckoutButtonClick = () => {
    navigate("/pay-check", {
      state: {
        selectedCartItemList,
        isRemote,
        couponDiscount,
        finalPrice,
      },
    });
  };

  if (state.isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <S.OrderCheckPage>
      <Header>
        <img src={backButton} alt="뒤로가기" onClick={() => navigate(-1)}></img>
      </Header>
      {errorMessage && <ErrorBox />}
      <OrderCheckContent
        selectedCartItemList={selectedCartItemList}
        isRemote={isRemote}
        onRemoteChange={setIsRemote}
        onDiscountChange={setCouponDiscount}
        onFinalPriceChange={setFinalPrice}
      />
      <Footer
        text="결제하기"
        active={true}
        handleClick={handleCheckoutButtonClick}
      ></Footer>
    </S.OrderCheckPage>
  );
}

export { OrderCheckPage };
