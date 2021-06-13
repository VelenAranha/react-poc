import "./App.css";

import Toolbar from "./components/Toolbar";
import Passengers from "./views/Passengers/Passengers";
import Home from "./views/Home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Toolbar></Toolbar>
        <div className="bg-white-100 max-w-7xl mx-auto p-4 flex items-center justify-center">
          <Switch>
            <Route path="/passengers">
              <Passengers />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
