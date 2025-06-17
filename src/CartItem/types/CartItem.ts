export interface CartItem {
  id: number;
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    stockQuantity: number;
  };
  cartQuantity: number;
}
