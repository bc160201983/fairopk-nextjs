import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";

const Products = ({ id, name, productsData, index }) => {
  const ref = useRef(null);

  return (
    <div className="w-full  border-b border-solid border-gray-150 mt-5">
      <ProductHeader title={name} refs={ref} />

      <div
        className="products h-[250px] space-x-4 w-full mt-4 flex justify-start items-center overflow-x-scroll no-scrollbar scroll-smooth"
        ref={ref}
      >
        {productsData.map((product) => {
          const image = product.images[0];
          return (
            <ProductList
              key={product.id}
              image={image}
              {...product}
              slug={product.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
