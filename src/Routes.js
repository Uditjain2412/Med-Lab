import { Switch, Route } from "react-router";

import Home from "./pages/home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/lab" exact></Route>
      <Route path="/about" exact></Route>
    </Switch>
  );
};

export default Routes;
