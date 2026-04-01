import React, { use, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Products = ({ productPromise, cartProducts, setCartProducts }) => {
    const products = use(productPromise);
    // console.log(products);

    const [toggle, setToggle] = useState(true);

    return (
        <div className="mt-20">
            <div className="text-center space-y-4">
                <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div>
                    <button onClick={() => setToggle(true)} className={`btn ${toggle === true ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-black"} rounded-full  mr-4`}>
                        Products
                    </button>
                    <button onClick={() => setToggle(false)} className={`btn rounded-full ${toggle === false ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-black"}`}>
                        Cart {cartProducts.length === 0 ? "" : `(${cartProducts.length})`}
                    </button>
                </div>
            </div>
            <div>
                {toggle == true ? (
                    <div className="mt-10 container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Product setCartProducts={setCartProducts} cartProducts={cartProducts} key={product.id} product={product}></Product>
                        ))}
                    </div>
                ) : (
                    <Cart cartProducts={cartProducts}></Cart>
                )}
            </div>
        </div>
    );
};

export default Products;
