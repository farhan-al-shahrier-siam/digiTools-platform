import React, { use } from "react";
import Product from "../Product/Product";

const Products = ({ productPromise }) => {
    const products = use(productPromise);
    // console.log(products);

    return (
        <div className="mt-20">
            <div className="text-center space-y-4">
                <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white mr-4">Products</button>
                    <button className="btn rounded-full">Cart (2)</button>
                </div>
            </div>
            <div className="mt-10 container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Products;
