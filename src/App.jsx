import { useState } from "react";
import { Header } from "./component/Header";
import "./index.css";
import { Home } from "./page/Home";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
