import { useNavigate } from "react-router";
import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { OrderCheckContent } from "@/CartItem/components/OrderCheckContent/OrderCheckContent";
import backButton from "../../assets/backButton.png";
import * as S from "./OrderCheckPage.styles";

function OrderCheckPage() {
  const navigate = useNavigate();
  const handleCheckoutButtonClick = () => {
    navigate("/pay-check", {});
  };

  return (
    <S.OrderCheckPage>
      <Header>
        <img src={backButton} alt="뒤로가기" onClick={() => navigate(-1)}></img>
      </Header>
      <OrderCheckContent />
      <Footer
        text="결제하기"
        active={true}
        handleClick={handleCheckoutButtonClick}
      ></Footer>
    </S.OrderCheckPage>
  );
}

export { OrderCheckPage };
