import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";

import Header from "./pages/Shared/Header/Header";
import MoreItems from "./pages/MoreItems/MoreItems/MoreItems";
import Details from "./pages/Details/Details";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/moreItems">
            <MoreItems></MoreItems>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/addProduct">
            <Details></Details>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
