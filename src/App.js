import { LoginRoute, ProtectedRoutes } from "./routes";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <ProtectedRoutes />
    </Fragment>
  );
}

export default App;
