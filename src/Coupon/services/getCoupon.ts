async function getCoupon() {
  const token = import.meta.env.VITE_APP_TOKEN;

  const response = await fetch(`/coupons`, {
    method: "GET",
    headers: { Authorization: `Basic ${token}` },
  });

  if (!response.ok) {
    throw new Error(
      `쿠폰 정보를 가져오는데 실패했습니다. 상태 코드: ${response.status}`
    );
  }
  return await response.json();
}

export { getCoupon };
