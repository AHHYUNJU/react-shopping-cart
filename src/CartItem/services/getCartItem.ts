type PageableType = {
  page: number;
  size: number;
};

const PAGEABLE_DEFAULT = {
  page: 0,
  size: 20,
};

async function getCartItem(pageable: PageableType = PAGEABLE_DEFAULT) {
  const { page, size } = pageable;
  const token = import.meta.env.VITE_APP_TOKEN;

  const params = new URLSearchParams({
    page: String(page),
    size: String(size),
  });

  const response = await fetch(`/cart-items?${params}`, {
    method: "GET",
    headers: { Authorization: `Basic ${token}` },
  });

  if (!response.ok) {
    throw new Error(
      `장바구니 아이템 정보를 가져오는데 실패했습니다. 상태 코드: ${response.status}`
    );
  }
  const data = await response.json();

  return data;
}

export { getCartItem };
