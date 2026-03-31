import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PricingSection from "./components/PricingSection/PricingSection";
import StatusSection from "./components/StatusSection/StatusSection";
import StepsSection from "./components/StepsSection/StepsSection";

function App() {
    return (
        <>
          <Navbar></Navbar>

          <Banner></Banner>

          <StatusSection></StatusSection>

          <StepsSection></StepsSection>

          <PricingSection></PricingSection>

          <Footer></Footer>
        </>
    );
}

export default App;
