import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Index from "./components/Index/index";
import Navbar from "./components/Navbar/navbar";
import Contact from "./components/Contact/contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
