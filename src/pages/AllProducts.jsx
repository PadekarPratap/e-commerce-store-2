import React from "react";
import Navbar from "../components/Navbar";
import CategoriesBar from "../components/CategoriesBar";
import TitleBar from "../components/TitleBar";
import useFetch from "../hooks/useFetch";
import { BASE_URL, ENDPOINTS } from "../api/Endpoints";
import ProductCard from "../components/ProductCard";
import BallTriangle from "react-loading-icons/dist/esm/components/ball-triangle";
import Footer from "../components/Footer";
import { useState } from "react";

const AllProducts = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch(BASE_URL + ENDPOINTS.ALL_PRODUCTS);
  // console.log(products)

  const [filteredValue, setFilteredValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts =
    filteredValue === "all"
      ? products
      : [...(products ?? [])].sort((a, b) => {
          switch (filteredValue) {
            case "highest_rated":
              return b.rating.rate - a.rating.rate;
            case "lowest to highest":
              return a.price - b.price;
            case "highest to lowest":
              return b.price - a.price;
            case "lowest_rated":
              return a.rating.rate - b.rating.rate;
          }
        });
  
  const productSearch = products?.filter((prd) => {
    return prd.title.toLowerCase().includes(searchQuery)
  })

  return (
    <div>
      <Navbar />
      <CategoriesBar />
      <TitleBar
        setFilteredValue={setFilteredValue}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      {loading ? (
        <div className="shop-container my-[3rem]">
          <div className="flex flex-col items-center gap-5 justify-center">
            <BallTriangle stroke="#57bfdc" speed={1} fontSize={200} />
            <p className="text-[#57bfdc] text-2xl font-semibold">Loading...</p>
          </div>
        </div>
      ) : searchQuery === "" ? (
        <div className="shop-container grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 my-[3rem]">
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="shop-container grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 my-[3rem]">
          {productSearch?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AllProducts;
