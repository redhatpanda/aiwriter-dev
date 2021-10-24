import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Service";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Ai from "./Ai"
import Test from "./Test";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/ai" component={Ai} />
        <Route exact path="/test" component={Test} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
