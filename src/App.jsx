import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PricingSection from "./components/PricingSection/PricingSection";
import Products from "./components/Products/Products";
import StatusSection from "./components/StatusSection/StatusSection";
import StepsSection from "./components/StepsSection/StepsSection";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";

const fetchProduct = async () => {
    const res = await fetch("/data.json");
    return res.json();
};

function App() {
    const productPromise = fetchProduct();
    const [cartProducts, setCartProducts]  = useState([])

    return (
        <>
            <Navbar cartProducts={cartProducts}></Navbar>

            <Banner></Banner>

            <StatusSection></StatusSection>

            <Suspense fallback={<Loader></Loader>}>
                <Products setCartProducts={setCartProducts} cartProducts={cartProducts} productPromise={productPromise}></Products>
            </Suspense>

            <StepsSection></StepsSection>

            <PricingSection></PricingSection>

            <Footer></Footer>

            <ToastContainer />
        </>
    );
}

export default App;
