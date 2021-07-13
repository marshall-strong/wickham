import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./features/home/Home";
import Counter from "./features/counter/Counter";
import Logo from "./features/logo/Logo";
import NavBar from "./features/nav/NavBar";
import SampleLinks from "./features/sample_links/SampleLinks";
import Buildings from "./features/buildings/Buildings";
import Kitchens from "./features/kitchens/Kitchens";
import Products from "./features/products/Products";
import Recipes from "./features/recipes/Recipes";
import PaperProducts from "./features/paperProducts/PaperProducts";
import FoodProducts from "./features/foodProducts/FoodProducts";
import Vendors from "./features/vendors/Vendors";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/logo" component={Logo} />
          <Route exact path="/sample_links" component={SampleLinks} />
          <Route exact path="/buildings" component={Buildings} />
          <Route exact path="/kitchens" component={Kitchens} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/paper_products" component={PaperProducts} />
          <Route exact path="/food_products" component={FoodProducts} />
          <Route exact path="/vendors" component={Vendors} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
