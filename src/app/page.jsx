"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/context/ProductsContext";

export default function HomePage() {
  const { products } = useProducts();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      <Header />

      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
}
