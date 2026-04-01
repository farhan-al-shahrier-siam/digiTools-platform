import React, { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { toast } from "react-toastify";

const Product = ({ product, cartProducts, setCartProducts }) => {

    const [buyNowText, setBuyNowText] = useState(true)
    const handleBuyNow =(product) =>{
        const tempCartProducts = cartProducts.filter(singleProduct => singleProduct.id !==product.id)
        setCartProducts([...tempCartProducts, product])
        setBuyNowText(false)
        toast.warning(`${product.name} Added to cart...`)
    }

    // console.log(product);
    return (
        <div className="p-6 border-2 border-gray-300 rounded-2xl space-y-6">
            <div className="flex justify-end"><span className={`${product.tag === "new" ? "bg-[#DBFCE7] text-green-700" : product.tag === "best seller" ? "bg-[#FEF3C6] text-amber-600" : "bg-[#E1E7FF] text-purple-700"} px-3 py-1 rounded-full`}>{product.tag}</span></div>
            <div className="text-5xl flex items-center"><span className="border rounded-full p-3 border-gray-400">{product.icon}</span></div>
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="text-[#627382]">{product.description}</p>
            <p>
                <span className="font-bold text-2xl">${product.price}</span>/{product.period}
            </p>
            <div>
                <p className="flex items-center gap-2"><IoMdDoneAll className="text-green-500" /> {product.features[0]}</p>
                <p className="flex items-center gap-2"><IoMdDoneAll className="text-green-500" />{product.features[1]}</p>
                <p className="flex items-center gap-2"><IoMdDoneAll className="text-green-500" />{product.features[2]}</p>
            </div>
            <button onClick={()=>handleBuyNow(product)} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">{buyNowText === true ? "Buy Now" : "Added to Cart"}</button>
        </div>
    );
};

export default Product;
