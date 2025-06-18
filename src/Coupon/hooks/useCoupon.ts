import { useState, useEffect } from "react";
import { Coupon } from "../types/Coupon";
import { getCoupon } from "../services/getCoupon";

function useCoupon(id: number) {
  const [coupon, setCoupon] = useState<Coupon[]>([]);

  const fetchCoupon = async (id: number) => {
    try {
      const response = await getCoupon(id);
      setCoupon(response);
    } catch (err) {
      console.error("쿠폰 목록 불러오기 실패:", err);
    }
  };

  useEffect(() => {
    fetchCoupon(id);
  }, [id]);

  return { coupon };
}

export { useCoupon };
