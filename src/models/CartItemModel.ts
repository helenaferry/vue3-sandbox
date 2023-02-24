import type { ProductModel } from "./ProductModel";

export interface CartItemModel {
  product: ProductModel;
  quantity: number;
}
