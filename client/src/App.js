import "./App.css";
import { AppBody } from "./common/styles";
import AllRoutes from "./AllRoutes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <AppBody id="AppBody">
      <Router history={history}>
        <Route component={AllRoutes} />
      </Router>
    </AppBody>
  );
}

export default App;
