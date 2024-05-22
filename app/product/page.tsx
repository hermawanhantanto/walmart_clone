import { notFound } from "next/navigation";
import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import parse from "html-react-parser";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddCart from "@/components/shared/AddCart";


interface Props {
  searchParams: {
    url: string;
  };
}

const Page = async ({ searchParams: { url } }: Props) => {
  const product = await fetchProduct(url);
  if (!product) return notFound();
 

  return (
    <div className="sm:p-10 p-5 flex flex-col w-full lg:flex-row gap-10">
      <div className="flex flex-col gap-3 ">
        {product.content.images.map((image: any) => (
          <Image
            key={image}
            src={image}
            alt={product.content.title}
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-contain border p-5 rounded shadow hidden lg:block"
          />
        ))}
      </div>

      <Carousel className="max-w-xl lg:w-2/5 w-full h-fit border flex items-center justify-center self-start lg:max-w-full max-lg:mx-auto">
        <CarouselContent>
          {product.content.images.map((image: any, i: number) => (
            <CarouselItem key={i}>
              <div className="p-1 aspect-square flex items-center justify-center">
                <Image
                  src={image}
                  alt="carousel image"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="max-sm:hidden" />
      </Carousel>

      <div className="p-5 rounded shadow border flex flex-col h-fit lg:w-3/5 max-lg:mx-auto w-full ">
        <h1 className="xl:text-xl sm:text-lg text-sm font-bold">
          {product.content.title}
        </h1>
        <div className="flex items-center gap-2 mt-6 flex-wrap">
          {product.content.breadcrumbs.map((breadcrumb: any) => (
            <Badge key={breadcrumb} variant={"secondary"} className="text-xs">
              {breadcrumb}
            </Badge>
          ))}
        </div>
        <div className="mt-4 text-sm">{parse(product.content.description)}</div>
        <p className="text-yellow-500 text-sm mt-8 flex items-center gap-2">
          {product.content.rating.rating} ⭐
          <span className="text-slate-500">
            ({product.content.rating.count} Reviews)
          </span>
        </p>
        <h1 className="text-xl font-bold mt-8">
          {product.content.currency} {product.content.price}
        </h1>

        <div className="mt-4">
          <AddCart product={product.content} />
        </div>
        {product.content.specifications && (
          <>
            <hr className="my-10" />
            <h1 className="sm:text-xl text-sm font-bold">Spesifications</h1>
            <Table className="mt-8">
              <TableHeader>
                <TableRow>
                  <TableHead>Key</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.content.specifications.map((item: any) => (
                  <TableRow key={item.key}>
                    <TableCell>{item.key}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
