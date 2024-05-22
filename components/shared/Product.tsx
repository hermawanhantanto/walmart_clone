import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface Props {
  product: {
    image: string;
    title: string;
    product_id: string;
    url: string;
    price: {
      price: number;
      currency: string;
    };
    rating: {
      count: number;
      rating: number;
    };
    badge?: string;
  };
}

const Product = ({ product }: Props) => {
  return (
    <Link
      href={{ pathname: "/product", query: { url: product.url } }}
      className="p-5 border rounded shadow flex flex-col relative gap-2 h-[400px]"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="w-[200px] h-[200px] self-center"
      />
      <h4 className="text-lg font-bold">
        {product.price.currency}
        {product.price.price}
      </h4>
      <p className="text-sm">{product.title}</p>
      <p className="text-yellow-500 text-sm absolute bottom-5 flex items-center gap-1">
        {product.rating.rating}
        <span>⭐</span>
        <span className="text-slate-500">({product.rating.count})</span>
      </p>
      {product.badge && (
        <Badge className="absolute top-5 right-5 w-fit">{product.badge}</Badge>
      )}
    </Link>
  );
};

export default Product;
