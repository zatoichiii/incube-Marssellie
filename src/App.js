
import About from "./components/blocks/About";
import Aiming from "./components/blocks/Aiming";
import RulesTerms from "./components/blocks/RulesTerms";
import Footer from "./components/blocks/Footer";
import AwardsnCat from "./components/blocks/AwardsnCat";
import Header from "./components/blocks/Header";
import Banner from "./components/blocks/Banner";
import Overview from "./components/blocks/Overview";
import Operates from "./components/blocks/Operates";
import CoreValues from "./components/blocks/CoreValues";

function App() {
  return (
      <div className='App'>
          <Header />
          <Banner />
          <About/>
          <Overview />
          <CoreValues />
          <Operates />
          <AwardsnCat/>
          <RulesTerms/>
          <Aiming/>
          <Footer/>
      </div>

  );
}

export default App;
