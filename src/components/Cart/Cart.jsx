import React from "react";
import SingleCartProduct from "../SingleCartProduct";
import { toast } from "react-toastify";

const Cart = ({ cartProducts, setCartProducts }) => {
    let total = 0;
    cartProducts.forEach((item) => (total += item.price));
    const handleProceedToCheckout = () => {
        setCartProducts([])
        toast.success("Checkout Successful!");
    };
    return (
        <div>
            {cartProducts.length !== 0 ? (
                <div className="mt-10 container mx-auto p-10 border-2 border-gray-200 rounded-2xl">
                    <h1 className="font-bold text-2xl mb-6">Your Cart</h1>
                    <div className="space-y-4">
                        {cartProducts.map((cartProduct) => (
                            <SingleCartProduct key={cartProduct.id} cartProducts={cartProducts} setCartProducts={setCartProducts} cartProduct={cartProduct}></SingleCartProduct>
                        ))}
                    </div>
                    <div className="flex justify-between py-6">
                        <p>Total:</p>
                        <p className="font-bold text-xl">${total.toFixed(2)}</p>
                    </div>
                    <div>
                        <button onClick={handleProceedToCheckout} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-full">Proceed to Checkout</button>
                    </div>
                </div>
            ) : (
                <div className="mt-10 container mx-auto p-10 border-2 border-gray-200 rounded-2xl text-center">
                    <h1 className="font-bold text-2xl mb-6">Your Cart is empty</h1>
                    <p>Goto Products to Buy Products...</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
