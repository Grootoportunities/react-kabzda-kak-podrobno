import React from "react";
import "./App.css";
import { AppTitle } from "./components/appTitle/AppTitle";
import { Rating } from "./components/rating/Rating";
import { OnOff } from "./components/onOff/OnOff";
import { Accordion } from "./components/accordion/Accordion";
import { UncontrolledAccordion } from "./components/accordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/rating/UncontrolledRating";
import styled from "styled-components";

function App() {
  console.log("App Rendering");
  return (
    <StyledApp>
      {/*<AppTitle topic={"This is APP component"} />*/}
      {/*<Accordion heading={"This is first Accordion"} turned />*/}
      {/*<Accordion heading={"This is second Accordion"} />*/}
      {/*<AppTitle topic={"This is rating"} />*/}
      {/*<Rating value={0} />*/}
      {/*<Rating value={1} />*/}
      {/*<Rating value={2} />*/}
      {/*<Rating value={3} />*/}
      {/*<Rating value={4} />*/}
      {/*<Rating value={5} />*/}

      <OnOff />
      <UncontrolledAccordion heading={"Menu"} />
      <UncontrolledRating />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
