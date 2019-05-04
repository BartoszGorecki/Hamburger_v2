import React, { Suspense } from "react";
import Layout from "./components/Layout";
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "./components/BurgerBuilder";
import "./style/App.css";
const Orders = React.lazy(() => import("./components/Orders"));
const Checkout = React.lazy(() => import("./components/Checkout"));

const App = () => {
  return (
    <div className="App-container">
      <Layout>
        <Switch>
          <Route
            path="/orders"
            render={() => (
              <Suspense fallback={<p>Loading...</p>}>
                <Orders />
              </Suspense>
            )}
          />
          <Route
            path="/checkout"
            render={props => (
              <Suspense fallback={<p>Loading...</p>}>
                <Checkout {...props} />
              </Suspense>
            )}
          />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
