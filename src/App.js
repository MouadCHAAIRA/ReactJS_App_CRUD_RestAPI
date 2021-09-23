import Provider from "./API/Provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from "./components/Register";
import PrivateRoute from "./route/PrivateRoute";
import AddPoduct from "./components/AddPoduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={Register} path="/register" exact />
            <Route component={Login} path="/login" exact />
            <PrivateRoute component={Home} path="/" exact />
            <PrivateRoute component={AddPoduct} path="/addproduct" exact />
            <PrivateRoute component={UpdateProduct} path="/updateproduct" exact/>
            {/* <PrivateRoute component={""} path="/" exact /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
