import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "./containers/Login";
import { MainScreen } from "./containers/Main";
import { Recommended } from "./containers/Recommended";
import { Review } from "./containers/Review";
import { useStore } from "./store";
/*import { lazy, Suspense } from "react";

 const LoginScreen = lazy(() => import('./containers/Login'))
const MainScreen = lazy(() => import('./containers/Main'))
const Review = lazy(() => import('./containers/Login')) */

export const ProtectedRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginScreen />
      </Route>
      <ProtectedRoute path="/app" component={MainScreen} />
      <ProtectedRoute path="/review" component={Recommended} />
      <ProtectedRoute path="/done" component={Review} />
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
