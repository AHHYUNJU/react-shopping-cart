import { useNavigate } from "react-router";
import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import backButton from "../../assets/backButton.png";
import * as S from "./OrderCheckPage.styles";

function OrderCheckPage() {
  const navigate = useNavigate();
  const handleCheckoutButtonClick = () => {
    navigate("pay-check", {});
  };
  return (
    <S.OrderCheckPage>
      <Header>
        <img src={backButton}></img>
      </Header>
      {/* <OrderCheckContent /> */}
      <Footer
        text="결제하기"
        active={true}
        handleClick={handleCheckoutButtonClick}
      ></Footer>
    </S.OrderCheckPage>
  );
}

export { OrderCheckPage };
