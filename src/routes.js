import { Switch, Route } from "react-router-dom";
import { LoginScreen } from "./containers/Login";
import { MainScreen } from "./containers/Main";
import { Review } from "./containers/Review";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/app">
        <MainScreen />
      </Route>

      <Route exact path="/">
        <LoginScreen />
      </Route>

      <Route exact path="/review">
        <Review />
      </Route>
    </Switch>
  );
};
