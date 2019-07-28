import { Product } from '../src/Product';
export function CalculatePriceAfterTax(product: Product, tax: number): number {
  return product.Price + product.Price * tax;
}
