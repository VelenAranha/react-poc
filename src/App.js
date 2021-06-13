import "./App.css";

import Toolbar from "./components/Toolbar";
import Passengers from "./views/Passengers";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Toolbar></Toolbar>
        <div className="bg-white-100 max-w-7xl mx-auto p-4 flex items-center justify-center flex-1 w-full h-full overflow-scroll">
          <Switch>
            <Route path="/passengers">
              <Passengers />
            </Route>
            <Route path="/">
              <Link
                as="button"
                to="/passengers"
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Passengers
              </Link>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
