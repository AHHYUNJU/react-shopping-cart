import {
  createContext,
  ReactNode,
  useMemo,
  useState,
  useContext,
  useEffect,
} from "react";
import { CouponResponse } from "../types/Coupon";
import { getCoupon } from "../services/getCoupon";

type CouponContextType = {
  couponList: CouponResponse[];
  checkedCoupons: CouponResponse["id"][];
  setCouponList: (list: CouponResponse[]) => void;
  setCheckedCoupons: (couponId: CouponResponse["id"][]) => void;
};

export const CouponContext = createContext<CouponContextType | undefined>(
  undefined
);

export const CouponProvider = ({ children }: { children: ReactNode }) => {
  const [couponList, setCouponList] = useState<CouponResponse[]>([]);
  const [checkedCoupons, setCheckedCoupons] = useState<CouponResponse["id"][]>(
    []
  );

  useEffect(() => {
    const fetchCoupon = async () => {
      const response = await getCoupon();
      setCouponList(response);
    };
    fetchCoupon();
  }, []);

  const value = useMemo<CouponContextType>(
    () => ({ couponList, checkedCoupons, setCouponList, setCheckedCoupons }),
    [couponList, checkedCoupons, setCouponList, setCheckedCoupons]
  );

  return (
    <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
  );
};

export const useCouponContext = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error(
      "useCouponContext는 CouponProvider 안에서 사용해야 합니다."
    );
  }
  return context;
};
