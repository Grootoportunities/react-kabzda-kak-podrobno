import React, { useState } from "react";
import "./App.css";
import { Rating, RatingValueType } from "./components/rating/Rating";
import styled from "styled-components";
import { Accordion } from "./components/accordion/Accordion";
import { OnOff } from "./components/onOff/OnOff";
import { UncontrolledOnOff } from "./components/onOff/UncontrolledOnOff";

function App() {
  console.log("App Rendering");

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [turned, setTurned] = useState<boolean>(false);
  const [on, setOn] = useState<boolean>(false);

  return (
    <StyledApp>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion
        heading={"Menu"}
        turned={turned}
        onClick={() => setTurned(!turned)}
      />
      {/*<Accordion heading={"Menu"} turned={turned} onClick={setTurned} />*/}
      <OnOff on={on} setOn={setOn} />
      <UncontrolledOnOff setOn={setOn} /> {on.toString()}
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
