import { LoginScreen } from "./containers/Login";
import { MainScreen } from "./containers/Main";
import { useStore } from "./store";

function App() {
  const { access_token } = useStore();
  return (
    <div className="">{access_token ? <MainScreen /> : <LoginScreen />}</div>
  );
}

export default App;
