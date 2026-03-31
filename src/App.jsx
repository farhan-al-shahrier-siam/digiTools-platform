import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import StatusSection from "./components/StatusSection/StatusSection";
import StepsSection from "./components/StepsSection/StepsSection";

function App() {
    return (
        <>
          <Navbar></Navbar>

          <Banner></Banner>

          <StatusSection></StatusSection>

          <StepsSection></StepsSection>
        </>
    );
}

export default App;
