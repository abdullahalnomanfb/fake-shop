import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import ProductComponent from "./Components/ProductComponent";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/product/:productId" component={ProductComponent} />
          <Route path="/" component={ProductListing} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
