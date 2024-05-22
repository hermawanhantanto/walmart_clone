import React from "react";
import fetchSearch from "@/lib/fetchSearch";
import Product from "@/components/shared/Product";

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

const SearchPage = async ({ searchParams: { q } }: SearchPageProps) => {
  const results = await fetchSearch(q);

  return (
    <div className="w-full p-10">
      <h1 className="font-bold text-xl ">Results for &quot;{q}&quot;</h1>
      <p className="text-slate-500 text-semibold text-sm">
        ({results?.content.total_results} +)
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {results?.content.organic.map((product: any) => (
          <li key={product.product_id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
