import { useState, useEffect } from "react";
import { Coupon } from "../types/Coupon";
import { getCoupon } from "../services/getCoupon";

function useCoupon() {
  const [coupon, setCoupon] = useState<Coupon[]>([]);

  const fetchCoupon = async () => {
    try {
      const response = await getCoupon();
      setCoupon(response);
    } catch (err) {
      console.error("쿠폰 목록 불러오기 실패:", err);
    }
  };

  useEffect(() => {
    fetchCoupon();
  }, []);

  return { coupon };
}

export { useCoupon };
