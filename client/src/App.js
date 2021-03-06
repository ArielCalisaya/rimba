import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Clothes from "./pages/clothes";
import ProductDetails from "./pages/productDetails";
import SignIn from "./pages/signIn";
import Navbar from "./components/Navbar";
import "./assets/styles/App.css";
import "./assets/main.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ropa" component={Clothes} />
          <Route exact path="/ropa/:id" component={ProductDetails} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
