import React from "react";
import SingleCartProduct from "../SingleCartProduct";

const Cart = ({ cartProducts }) => {
    let total = 0;
    cartProducts.forEach((item) => (total += item.price));
    return (
        <div className="mt-10 container mx-auto p-10 border-2 border-gray-200 rounded-2xl">
            <h1 className="font-bold text-2xl mb-6">Your Cart</h1>
            <div className="space-y-4">
                {cartProducts.map((cartProduct) => (
                    <SingleCartProduct key={cartProduct.id} cartProduct={cartProduct}></SingleCartProduct>
                ))}
            </div>
            <div className="flex justify-between py-6">
                <p>Total:</p>
                <p className="font-bold text-xl">${total.toFixed(2)}</p>
            </div>
            <div>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-full">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
