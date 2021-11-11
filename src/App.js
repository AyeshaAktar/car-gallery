import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";

import Header from "./pages/Shared/Header/Header";
import MoreItems from "./pages/MoreItems/MoreItems/MoreItems";
import Details from "./pages/Details/Details";
import Footer from "./pages/Shared/Footer/Footer";
import AddProduct from "./pages/AddProduct/AddProduct";
import SignIn from "./pages/Login/SignIn/SignIn";
import AuthProvider from "./context/AuthProvider";
import SignUp from "./pages/Login/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import ManageOrder from "./pages/ManageOrder/ManageOrder";
import MyOrder from "./pages/MyOrder/MyOrder";
import ManageProducts from "./pages/ManageProducts/ManageProducts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
              <AddProduct></AddProduct>
            </Route>
            <Route path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/manageProducts">
              <ManageProducts></ManageProducts>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
