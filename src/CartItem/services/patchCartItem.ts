async function patchCartItem(id: number, quantity: number) {
  const token = import.meta.env.VITE_APP_TOKEN;

  const response = await fetch(`/cart-items/${id}`, {
    method: "PATCH",
    headers: { Authorization: `Basic ${token}` },
    body: JSON.stringify({ quantity }),
  });

  if (!response.ok) {
    throw new Error(
      `수량을 조절하는데 실패했습니다. 상태 코드: ${response.status}`
    );
  }
  return await response.json();
}

export { patchCartItem };
