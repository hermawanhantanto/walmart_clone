import { Product } from "@/typings/productTypings";

export function getTotalChart(product: Product[]): string {
  const totalPrice = product.reduce((acc: number, product: Product) => {
    return acc + product.price;
  }, 0);

  return `${product[0].currency} ${totalPrice}`;
}

export function getItemChart(product: Product[]): Record<string, Product[]> {
  return product?.reduce((acc: Record<string, Product[]>, p: Product) => {
    const sku = p.meta.sku;
    if (!acc[sku]) {
      acc[sku] = [];
    }
    acc[sku].push(p);
    return acc;
  }, {});
}
