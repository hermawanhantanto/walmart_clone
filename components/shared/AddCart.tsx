"use client";
import { Content, Product } from "@/typings/productTypings";
import { Button } from "../ui/button";
import { useCartStore } from "@/store";

const AddCart = ({ product }: Content) => {
  const [cart, addCart, removeProduct] = useCartStore((state) => [
    state.cart,
    state.addChart,
    state.removeChart,
  ]);

  console.log(cart);
  const howManyInCart = cart.filter(
    (p) => p.meta.sku === product.meta.sku
  ).length;

  const handleAdd = () => {
    addCart(product);
  };

  const handleDelete = () => {
    removeProduct(product);
  };

  if (howManyInCart > 0)
    return (
      <div className="flex items-center gap-4">
        <Button
          className="bg-blue-600 hover:bg-blue-600/50 text-white font-bold w-fit"
          onClick={handleDelete}
        >
          -
        </Button>
        <p>{howManyInCart}</p>
        <Button
          className="bg-blue-600 hover:bg-blue-600/50 text-white font-bold w-fit"
          onClick={handleAdd}
        >
          +
        </Button>
      </div>
    );

  return (
    <Button
      className="bg-blue-600 hover:bg-blue-600/50 text-white font-bold w-fit"
      onClick={handleAdd}
    >
      Add to chart
    </Button>
  );
};

export default AddCart;
