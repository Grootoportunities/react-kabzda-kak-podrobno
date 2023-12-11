import React from "react";
import "./App.css";
import { AppTitle } from "./components/appTitle/AppTitle";
import { Rating } from "./components/rating/Rating";
import { Accordion } from "./components/accordion/Accordion";

function App() {
  console.log("App Rendering");
  return (
    <div>
      <AppTitle topic={"This is APP component"} />
      <Rating value={3} />
      <Accordion heading={"This is first Accordion"} turned />
      <Accordion heading={"This is second Accordion"} />
      <AppTitle topic={"This is rating"} />
      <Rating value={4} />
      <Rating />
    </div>
  );
}

export default App;
