import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import StatusSection from "./components/StatusSection/StatusSection";

function App() {
    return (
        <>
          <Navbar></Navbar>

          <Banner></Banner>

          <StatusSection></StatusSection>
        </>
    );
}

export default App;
