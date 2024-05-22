import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="sm:p-10 p-5 flex flex-col w-full lg:flex-row gap-10">
      <div className="flex flex-col gap-3 ">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton
            key={i}
            className="w-[100px] h-[100px] rounded hidden lg:block"
          />
        ))}
      </div>

      <Skeleton className="max-w-xl lg:w-2/5 w-full h-[400px] lg:max-w-full " />
      <Skeleton className="max-w-xl lg:w-3/5 w-full h-[600px] lg:max-w-full " />
    </div>
  );
};

export default Loading;
