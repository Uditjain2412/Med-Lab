import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import "./App.css";
import MainNavigation from "./common/components/Navigation/MainNavigation";
import Footer from "./common/components/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <MainNavigation />
        <Routes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
