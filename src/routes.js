import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "./containers/Login";
//import { MainScreen } from "./containers/Main";
//import { Recommended } from "./containers/Recommended";
import ErrorPage from "./containers/Error";
//import { Review } from "./containers/Review";
import { useStore } from "./store";
import { lazy, Suspense } from "react";

const MainScreen = lazy(() => import("./containers/Main"));
const Recommended = lazy(() => import("./containers/Recommended"));
const Review = lazy(() => import("./containers/Review"));

export const ProtectedRoutes = () => {
  return (
    <Suspense fallback={<h2>Loading ...</h2>}>
      <Switch>
        <Route exact path="/">
          <LoginScreen />
        </Route>
        <ProtectedRoute path="/app" component={MainScreen} />
        <ProtectedRoute path="/recommended" component={Recommended} />
        <ProtectedRoute path="/review" component={Review} />
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Suspense>
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
