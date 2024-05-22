import GridOption from "@/components/shared/GridOption";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex-1">
      <div className="grid grid-cols-2 grid-flow-row-dense gap-2 sm:gap-6 sm:m-6 m-2 md:grid-cols-4">
        <GridOption
          title="Sweet Gifts"
          image="/images/gifts.jpg"
          className="h-full bg-red-200 md:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image="/images/fashion.jpg"
          className="bg-yellow-200 row-span-2 col-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="/images/electronics.jpg"
          className="row-span-2 bg-green-200"
        />
        <GridOption
          title="Shop Toys"
          image="/images/toys.jpg"
          className="bg-slate-200 h-64"
        />

        <GridOption
          title="Shop Home"
          image="/images/house.jpg"
          className="bg-red-200 h-64 col-span-2"
        />
        <GridOption
          title="All You Need"
          image="/images/youneed.jpg"
          className="bg-red-200 row-span-4 col-span-2"
        />
        <GridOption
          title="Enjoy Free Shipping"
          image="/images/shipp.jpg"
          className="bg-zinc-200 row-span-3"
        />
        <GridOption
          title="Shop Beauty"
          image="/images/beauty.jpg"
          className="bg-black-200 row-span-3"
        />
        <GridOption
          title="Shop Sports"
          image="/images/sports.jpg"
          className="bg-teal-200 h-64"
        />
        <GridOption
          title="Shop Gadgets"
          image="/images/gadgets.jpg"
          className="bg-blue-200 h-64"
        />
        <GridOption
          title="Flash Deals"
          image="/images/thunder.jpg"
          className="bg-amber-200 col-span-2"
        />
      </div>
    </main>
  );
}
