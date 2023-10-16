
import About from "./components/blocks/About";
import Aiming from "./components/blocks/Aiming";
import RulesTerms from "./components/blocks/RulesTerms";
import Footer from "./components/blocks/Footer";
import AwardsnCat from "./components/blocks/AwardsnCat";

function App() {
  return (
      <div className='App'>
          <About/>
          <AwardsnCat/>
          <RulesTerms/>
          <Aiming/>
          <Footer/>
      </div>

  );
}

export default App;
