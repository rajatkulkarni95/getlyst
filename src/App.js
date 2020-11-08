import { Route } from "react-router-dom";
import { LoginScreen } from "./containers/Login";
import { MainScreen } from "./containers/Main";
import { Review } from "./containers/Review";
import { useStore } from "./store";

function App() {
  const { access_token } = useStore();
  return (
    <div className="">
      {access_token ? <MainScreen /> : <LoginScreen />}
      <Route exact path="/review">
        <Review />
      </Route>
    </div>
  );
}

export default App;
