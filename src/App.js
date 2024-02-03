import React from "react";
import Weather from "./weather";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <Footer />
      </div>
    </div>
  );
}
