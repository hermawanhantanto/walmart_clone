import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  className?: string;
  image?: string;
}

const GridOption = ({ title, className, image }: Props) => {
  return (
    <Link
      href={{ pathname: "/search", query: { q: title } }}
      className={cn("relative grid-option h-full", className)}
    >
      <h2 className="text-lg font-bold">{title}</h2>

      {image && (
        <Image
          src={image}
          alt={title}
          fill={true}
          className="object-cover opacity-20 hover:opacity-75 rounded-md"
        />
      )}
    </Link>
  );
};

export default GridOption;
