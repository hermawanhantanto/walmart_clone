export interface Product {
  url: string;
  meta: {
    sku: string;
    gtin: string | null;
  };
  price: number;
  title: string;
  rating: {
    count: number;
    rating: number;
  };
  currency: string;
  _warnings: string[];
  breadcrumbs: string[];
  description: string;
  specifications: {
    key: string;
    value: string;
  }[];
  parse_status_code: number;
  images: string[];
}

export interface Content {
  product: Product;
}
