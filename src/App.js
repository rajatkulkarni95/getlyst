import { Route, useHistory } from "react-router-dom";
import { LoginScreen } from "./containers/Login";
import { MainScreen } from "./containers/Main";
import { Review } from "./containers/Review";
import { Routes } from "./routes";
import { useStore } from "./store";

function App() {
  const { access_token } = useStore();
  const history = useHistory();
  return (
    <div className="">
      {access_token ? history.push("/app") : history.push("/")}
      <Routes />
    </div>
  );
}

export default App;
