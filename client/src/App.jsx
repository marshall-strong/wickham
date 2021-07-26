import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./app/home/Home";
import NavBar from "./app/nav/NavBar";
import BuildingShow from "./features/buildings/BuildingShow";
import BuildingsIndex from "./features/buildings/BuildingsIndex";
import FoodProductShow from "./features/foodProducts/FoodProductShow";
import FoodProductsIndex from "./features/foodProducts/FoodProductsIndex";
import KitchenShow from "./features/kitchens/KitchenShow";
import KitchensIndex from "./features/kitchens/KitchensIndex";
import PaperProductShow from "./features/paperProducts/PaperProductShow";
import PaperProductsIndex from "./features/paperProducts/PaperProductsIndex";
import ProductShow from "./features/products/ProductShow";
import ProductsIndex from "./features/products/ProductsIndex";
import RecipeShow from "./features/recipes/RecipeShow";
import RecipesIndex from "./features/recipes/RecipesIndex";
import VendorShow from "./features/vendors/VendorShow";
import VendorsIndex from "./features/vendors/VendorsIndex";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/buildings" component={BuildingsIndex} />
          <Route
            exact
            path="/buildings/:building_id"
            component={BuildingShow}
          />
          <Route exact path="/food_products" component={FoodProductsIndex} />
          <Route
            exact
            path="/food_products/:food_product_id"
            component={FoodProductShow}
          />
          <Route exact path="/kitchens" component={KitchensIndex} />
          <Route exact path="/kitchens/:kitchen_id" component={KitchenShow} />
          <Route exact path="/paper_products" component={PaperProductsIndex} />
          <Route
            exact
            path="/paper_products/:paper_product_id"
            component={PaperProductShow}
          />
          <Route exact path="/products" component={ProductsIndex} />
          <Route exact path="/products/:product_id" component={ProductShow} />
          <Route exact path="/recipes" component={RecipesIndex} />
          <Route exact path="/recipes/:recipe_id" component={RecipeShow} />
          <Route exact path="/vendors" component={VendorsIndex} />
          <Route exact path="/vendors/:vendor_id" component={VendorShow} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
