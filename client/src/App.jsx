import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./app/home/Home";
import NavBar from "./app/nav/NavBar";
import Buildings from "./features/buildings/Buildings";
import Kitchens from "./features/kitchens/Kitchens";
import Products from "./features/products/Products";
import Recipes from "./features/recipes/Recipes";
import PaperProducts from "./features/paperProducts/PaperProducts";
import FoodProducts from "./features/foodProducts/FoodProducts";
import VendorsIndex from "./features/vendors/VendorsIndex";
import VendorsShow from "./features/vendors/VendorsShow";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/buildings" component={Buildings} />
          <Route exact path="/kitchens" component={Kitchens} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/paper_products" component={PaperProducts} />
          <Route exact path="/food_products" component={FoodProducts} />
          <Route exact path="/vendors" component={VendorsIndex} />
          <Route exact path="/vendors/:vendor_id" component={VendorsShow} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
