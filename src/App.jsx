
import Faq from "./components/FAQ/Faq";
import FitnessLandingPage from "./components/Dashbord/FitnessLanding";
import PricingPlans from "./components/Plane/Plane";
import Search from "./components/Search/Search";
import Buddy from "./components/Buddy/Buddy";
import Feedback from "./components/Feedback/Feedback";
import Map from "./components/Map/Map";
import BmiCalculator from "./components/BmiCalculator/BmiCalculator";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div>
        <FitnessLandingPage />
        <PricingPlans />
        <Search />
        <Buddy />
        <Feedback />
        <Faq />
        <Map/>
        <BmiCalculator/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
