import Basket from "@/components/shared/Basket";
import { ShoppingCartIcon } from "lucide-react";

const Page = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col px-5 py-10">
      <div className="flex items-center gap-4">
        <ShoppingCartIcon className="size-12" />
        <h4 className="font-bold text-xl">Your Chart</h4>
      </div>
      <p className="mt-4 text-slate-500 font-semibold text-sm">
        Review the items in your chart and checkout when is ready!
      </p>
      {/* <Basket /> */}
    </div>
  );
};

export default Page;
