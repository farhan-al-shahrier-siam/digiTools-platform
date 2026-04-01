import React from "react";
import { toast } from "react-toastify";


const SingleCartProduct = ({ cartProduct, cartProducts, setCartProducts }) => {
    const handleRemove =()=>{
        const tempCartProduct = cartProducts.filter(item => item.name !== cartProduct.name)
        setCartProducts(tempCartProduct);
        toast.error(`${cartProduct.name} removed from cart`)
    }
    return (
        <div className="bg-[#62738214] rounded-2xl">
            <div className="flex justify-between p-5 items-center ">
                <div className="flex justify-between gap-4 items-center">
                    <div className=" flex items-center p-2 text-4xl bg-white border-2 rounded-full">{cartProduct.icon}</div>
                    <div>
                        <h3 className="font-semibold text-xl">{cartProduct.name}</h3>
                        <p>${cartProduct.price}</p>
                    </div>
                </div>
                <button onClick={handleRemove}  className="btn btn-ghost text-red-600">Remove</button>
            </div>
        </div>
    );
};

export default SingleCartProduct;
