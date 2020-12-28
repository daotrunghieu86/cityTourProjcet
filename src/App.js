import React from "react";
import "./city-tours.scss";
import Navbar from "./Component/Navbar/Navbar";
import TourList from "./Component/Tours-list/Tour-list";

function App() {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
