import React, { Component } from "react";

// !

import Home from "../Home/home";
import About from "../About/about";
import Portfolio from "../Portfolio/portfolio";
import Profile from "../Profile/profile";
import Work from "../Work/work";
import Footer from "../Footer/footer";
import Social from "../SocialMedia/socialMedia";

class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default Index;
