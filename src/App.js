import Header from "./components/blocks/Header";
import Overview from "./components/blocks/Overview";
import Gallery from "./components/blocks/Gallery";
import Awards from "./components/blocks/Awards";
import Categories from "./components/blocks/Categories";
import Footer from "./components/blocks/Footer";
import Rules from "./components/blocks/Rules";
import Banner from "./components/blocks/Banner";
import Submit from "./components/blocks/Submit";


function App() {
  return (
      <div className='App'>

          <Header />
          <Banner />
          <Awards/>
          <Overview />
          <Gallery/>
          <Categories/>
          <Rules/>
          <Submit/>
          <Footer/>

      </div>

  );
}

export default App;
