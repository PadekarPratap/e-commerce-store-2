import React from "react";
import Navbar from "../components/Navbar";
import CategoriesBar from "../components/CategoriesBar";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const CartPage = () => {
  const cart = useSelector((state) => state.Cart.cart);

  const totalPrice = cart.reduce((total, eachItem) => {
    total += eachItem.price * eachItem.quantity;
    return total;
  }, 0);

  const shipping = totalPrice * 0.05
  const taxes = totalPrice * 0.1
  const orderTotal = totalPrice + shipping + taxes

  return (
    <div>
      <div className="fixed inset-0 bg-gray-100 z-[-10]"></div>
      <Navbar />
      <CategoriesBar />
      <div className="shop-container mt-5">
        <h2 className="text-4xl capitalize font-thin">Cart</h2>
        <div className="grid lg:grid-cols-4 gap-4 my-5">
          {/* cart  */}
          <div className="lg:col-span-3 bg-white rounded-lg border px-4 py-5">
            {cart.map((cartItem) => (
              <CartCard key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          {/* order summary  */}
          <div>
            <div className="border rounded-lg bg-white p-5">
              <h2 className="text-2xl italic font-semibold">Order Summary</h2>
              <hr className="h-[2px] bg-black my-2" />

              {/* subtotals  */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-thin text-lg">Order Subtotal</span>
                  <span className="text-xl font-medium font-robotoMono">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-thin text-lg">Shipping Total</span>
                  <span className="text-xl font-medium font-robotoMono">${(shipping).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-thin text-lg">Taxes</span>
                  <span className="text-xl font-medium font-robotoMono">${(taxes).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between border-black border-t">
                  <span className="font-medium text-lg">Order Total</span>
                  <span className="text-xl font-medium font-robotoMono">${(orderTotal).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
