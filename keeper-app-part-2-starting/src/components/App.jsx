import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";

import Parentdiv from "./Parentdiv";
import Photocontainer from "./Photocontainer";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage"; 

function App() {
  return (
    <div>
      <Header /><br></br><br></br><br></br><br></br>
      <About />
      <Parentdiv />
      <Photocontainer />
      
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
