import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "./containers/Login";
import { MainScreen } from "./containers/Main";
import { Review } from "./containers/Review";
import { useStore } from "./store";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginScreen />
      </Route>
      <ProtectedRoute path="/app" component={MainScreen} />
      <ProtectedRoute path="/review" component={Review} />
    </Switch>
  );
};

const ProtectedRoute = ({ component, path }) => {
  const { access_token } = useStore();
  return access_token ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/" />
  );
};
