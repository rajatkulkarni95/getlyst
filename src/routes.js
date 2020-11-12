import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "./containers/Login";
import { useStore } from "./store";
import { lazy, Suspense } from "react";
import ErrorPage from "./containers/Error";
import Navbar from "./components/Navbar";
import { Loader } from "./components/Loader";

const MainScreen = lazy(() => import("./containers/Main"));
const Recommended = lazy(() => import("./containers/Recommended"));
const Review = lazy(() => import("./containers/Review"));

export const ProtectedRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/">
          <LoginScreen />
        </Route>

        <Route>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/app" component={MainScreen} />
            <ProtectedRoute exact path="/recommended" component={Recommended} />
            <ProtectedRoute exact path="/review" component={Review} />
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
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
