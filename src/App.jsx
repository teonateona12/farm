import { useState } from "react";
import { Header } from "./component/Header";
import "./index.css";
import { Home } from "./page/Home";

function App() {
  return (
    <div className="main">
      <Header />
      <Home />
    </div>
  );
}

export default App;
