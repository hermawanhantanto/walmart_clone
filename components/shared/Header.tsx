"use client";
import { getTotalChart } from "@/lib/fetchTotalChart";
import { useCartStore } from "@/store";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = e.currentTarget.input.value;
    router.push("/search?q=" + value);
  };
  const [chart] = useCartStore((state) => [state.cart]);

  const price = chart.length > 0 ? getTotalChart(chart) : "$0.00";

  return (
    <header className=" p-10 bg-blue-600 items-center lg:flex-row flex-col flex gap-5 w-full">
      <Link href="/">
        <Image
          src="https://i.imgur.com/5V4wehM.png"
          width={150}
          height={150}
          alt="logo"
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-full flex-1 flex items-center min-h-[46px] "
      >
        <input
          type="text"
          placeholder="Search anything..."
          name="input"
          className="rounded-full outline-none placeholder:text-xs flex-1 px-5 text-sm"
        />
        <button
          type="submit"
          className="h-12 rounded-full bg-yellow-500 px-3 py-2 flex items-center w-12"
          title="btn"
        >
          <Search className="  text-white " />
        </button>
      </form>
      <div className="space-x-5 flex items-center">
        <Link href="" className="flex items-center gap-2 max-lg:hidden">
          <Grid2X2 size={20} color="white" />
          <p className="text-xs text-white font-bold ">Departement</p>
        </Link>
        <Link href="" className="flex items-center gap-2 max-lg:hidden">
          <LayoutGrid size={20} color="white" />
          <p className="text-xs text-white font-bold">Service</p>
        </Link>
        <Link href={"/"} className="flex items-center gap-2">
          <Heart size={20} color="white" />
          <div>
            <p className="text-secondary text-xs">Recorder</p>

            <p className="text-xs text-white font-bold">My Items</p>
          </div>
        </Link>
        <Link href={"/basket"} className="flex items-center gap-2">
          <ShoppingCart size={20} color="white" />
          <div>
            <p className="text-secondary text-xs">
              {chart.length > 0 ? chart.length : "No items"}
            </p>

            <p className="text-xs text-white font-bold">{price}</p>
          </div>
        </Link>
        <Link href={"/"} className="flex items-center gap-2">
          <User size={20} color="white" />
          <div>
            <p className="text-secondary text-xs">Sign in</p>

            <p className="text-xs text-white font-bold">Account</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
