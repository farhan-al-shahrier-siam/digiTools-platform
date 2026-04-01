import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PricingSection from "./components/PricingSection/PricingSection";
import Products from "./components/Products/Products";
import StatusSection from "./components/StatusSection/StatusSection";
import StepsSection from "./components/StepsSection/StepsSection";
import Loader from "./components/Loader/Loader";

const fetchProduct = async () => {
    const res = await fetch("/data.json");
    return res.json();
};

function App() {
    const productPromise = fetchProduct();

    return (
        <>
            <Navbar></Navbar>

            <Banner></Banner>

            <StatusSection></StatusSection>

            <Suspense fallback={<Loader></Loader>}>
                <Products productPromise={productPromise}></Products>
            </Suspense>

            <StepsSection></StepsSection>

            <PricingSection></PricingSection>

            <Footer></Footer>
        </>
    );
}

export default App;
