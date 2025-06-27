import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { OrderCheckContent } from "@/CartItem/components/OrderCheckContent/OrderCheckContent";
import backButton from "../../assets/backButton.png";
import * as S from "./OrderCheckPage.styles";

function OrderCheckPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCartItemList = location.state?.selectedCartItemList || [];
  const [isRemote, setIsRemote] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

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

  return (
    <S.OrderCheckPage>
      <Header>
        <img src={backButton} alt="뒤로가기" onClick={() => navigate(-1)}></img>
      </Header>
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
