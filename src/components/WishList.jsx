import React from "react";
import { useSelector } from "react-redux";
import WishItem from "./WishItem";

const WishList = () => {
  const wishList = useSelector((state) => state.Cart.wishList);
  return (
    <div className="shop-container bg-white h-[70vh] my-8 rounded-md overflow-y-scroll">
      {wishList.map((wishProduct) => (
        <WishItem key={wishProduct.id} WishItem={wishProduct} />
      ))}
    </div>
  );
};

export default WishList;
