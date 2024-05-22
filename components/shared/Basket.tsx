"use client";
import Image from "next/image";
import AddCart from "./AddCart";
import { Button } from "../ui/button";
import { getItemChart, getTotalChart } from "@/lib/fetchTotalChart";
import { useCartStore } from "@/store";
import parse from "html-react-parser";

const Basket = () => {
  const [cart] = useCartStore((state) => [state.cart]);
  const products = getItemChart(cart);
  return (
    <>
      <div className="flex flex-col mt-12 w-full gap-6">
        {Object.keys(products).map((sku) => (
          <div
            className="sm:flex-row flex-col gap-4 flex items-start rounded border shadow p-5 "
            key={sku}
          >
            <Image
              src={products[sku][0].images[0]}
              width={200}
              height={200}
              alt="product"
              className="object-contain max-sm:self-center"
            />
            <div className="flex flex-col gap-2 line-clamp-1">
              <h4 className="text-lg font-bold">{products[sku][0].title}</h4>
              <p className="line-clamp-2">
                {parse(products[sku][0].description)}
              </p>
            </div>
            <div className="border rounded shadow p-5 self-center">
              <AddCart product={products[sku][0]} />
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-xl font-bold mt-8 self-end">
        Total {cart.length > 0 ? getTotalChart(cart) : "USD 0.00"}
      </h1>
      {cart.length > 0 && (
        <Button className="text-white hover:bg-blue-600/50 bg-blue-600 font-bold mt-10">
          Checkout
        </Button>
      )}
    </>
  );
};

export default Basket;
