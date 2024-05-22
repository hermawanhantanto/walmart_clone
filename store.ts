import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product } from "./typings/productTypings";

interface ProductState {
  cart: Product[];
  addChart: (product: Product) => void;
  removeChart: (product: Product) => void;
}

export const useCartStore = create<ProductState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addChart: (product: Product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeChart: (product: Product) => {
          const removeProduct = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku
          );

          set((state) => {
            const newCart = [...state.cart];
            newCart.splice(removeProduct, 1);
            return { cart: newCart };
          });
        },
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
