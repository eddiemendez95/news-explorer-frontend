import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "../../vendor/fonts.css";

import "./App.css";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <HashRouter>
      <Main />
      <About />
      <Footer />
    </HashRouter>
  );
}

export default App;
