import "./App.css";
import Sellers from "./Components/Sellers/Sellers";
import PropertiesToLet from "./Components/Let/PropertiesToLet";
import Buyers from "./Components/Buyers/Buyers";
import PropertiesForSale from "./Components/Sale/PropertiesForSale";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import BuyersPT from "./Components/BuyersPT";
import SellersPT from "./Components/SellersPT";
import PropertiesToLetPT from "./Components/PropertiesToLetPT";
import PropertiesForSalePT from "./Components/PropertiesForSalePT";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Buyers">Buyers</Link>
          <Link to="/Sellers">Sellers</Link>
          <Link to="/PropertiesForSale">Sale</Link>
          <Link to="/PropertiesToLet">Let</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sellers" element={<Sellers />} />
          <Route path="/Buyers" element={<Buyers />} />
          <Route path="/PropertiesForSale" element={<PropertiesForSale />} />
          <Route path="/PropertiesToLet" element={<PropertiesToLet />} />
        </Routes>
      </Router>
    </header>
  );
}
export default App;
