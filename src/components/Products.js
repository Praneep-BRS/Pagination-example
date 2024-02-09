import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "../pagination/Pagination";
import { TOTAL_RESULTS_PER_PAGE } from "../CONSTANTS";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${TOTAL_RESULTS_PER_PAGE}&skip=${
        (page - 1) * TOTAL_RESULTS_PER_PAGE
      }`,
    );
    const data = await res.json();

    setProducts(data?.products);
    setTotal(data?.total);
  };

  return !products.length ? (
    <div className='flex items-center justify-center text-xl font-semibold'>
      Loading...
    </div>
  ) : (
    <div className='flex flex-col gap-8'>
      <h2 className='flex items-center justify-center text-3xl font-semibold'>
        Products
      </h2>
      <div className='grid grid-cols-5 gap-x-3 gap-y-5'>
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
      <Pagination
        products={products}
        page={page}
        setPage={setPage}
        total={total}
      />
    </div>
  );
};

export default Products;
