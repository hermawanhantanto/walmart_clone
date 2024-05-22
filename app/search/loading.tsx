import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full p-10">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-4 w-20 mt-2" />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i}>
            <Skeleton className="h-[400px] w-[400px]" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loading;
