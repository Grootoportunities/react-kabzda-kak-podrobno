import React from "react";
import "./App.css";
import { AppTitle } from "./components/appTitle/AppTitle";
import { Rating } from "./components/rating/Rating";
import { Accordion } from "./components/accordion/Accordion";
import { OnOff } from "./components/onOff/OnOff";

function App() {
  console.log("App Rendering");
  return (
    <div>
      <AppTitle topic={"This is APP component"} />
      <Accordion heading={"This is first Accordion"} turned />
      <Accordion heading={"This is second Accordion"} />
      <AppTitle topic={"This is rating"} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <OnOff on />
      <OnOff on={false} />
    </div>
  );
}

export default App;
