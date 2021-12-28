import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import Help from './components/help'
import Home from './components/home'
import Contact from './components/contact'


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Credit Card
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={"/home"}>
                    Home
                  </Link>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/help"}>
                    Help
                  </Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/sign-in" element={<Login/>} />
              <Route path="/sign-up" element={<SignUp/>} />
              <Route path="/help" element={<Help/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
