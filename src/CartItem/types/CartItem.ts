export interface CartItem {
  id: number;
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    quantity: number;
  };
  quantity: number;
}
