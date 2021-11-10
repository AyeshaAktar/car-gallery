import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";

import Header from "./pages/Shared/Header/Header";
import MoreItems from "./pages/MoreItems/MoreItems/MoreItems";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/moreItems">
            <MoreItems></MoreItems>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
