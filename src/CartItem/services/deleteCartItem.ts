async function deleteCartItem(id: number) {
  const token = import.meta.env.VITE_APP_TOKEN;

  const response = await fetch(`/cart-items/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Basic ${token}` },
  });

  if (!response.ok) {
    throw new Error(
      `아이템을 삭제하는데 실패하였습니다. 상태코드: ${response.status}`
    );
  }
}

export { deleteCartItem };
