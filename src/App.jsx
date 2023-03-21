import { BrowserRouter } from "react-router-dom";
import { AboutUs, FindUs, Footer, Header, SpecialMenu } from './container';
import { Navbar } from './components';





const App = () => {
  return (
    
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Header />
        </div>
          <AboutUs />
          <SpecialMenu />
        <div>
          <FindUs />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
