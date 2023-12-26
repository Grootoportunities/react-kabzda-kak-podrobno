import React, { useState } from "react";
import styled from "styled-components";

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5;
};

type StarPropsType = {
  choosed?: boolean;
  setValue: (value: number) => void;
  id: number;
};

export function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating Rendering");

  const [value, setValue] = useState(0);

  // const onClick1Button = () => setValue(1);
  // const onClick2Button = () => setValue(2);
  // const onClick3Button = () => setValue(3);
  // const onClick4Button = () => setValue(4);
  // const onClick5Button = () => setValue(5);

  return (
    <div>
      <Star choosed={value >= 1} setValue={setValue} id={1} />
      {/*<button onClick={onClick1Button}>1</button>*/}
      <Star choosed={value >= 2} setValue={setValue} id={2} />
      {/*<button onClick={onClick2Button}>2</button>*/}
      <Star choosed={value >= 3} setValue={setValue} id={3} />
      {/*<button onClick={onClick3Button}>3</button>*/}
      <Star choosed={value >= 4} setValue={setValue} id={4} />
      {/*<button onClick={onClick4Button}>4</button>*/}
      <Star choosed={value >= 5} setValue={setValue} id={5} />
      {/*<button onClick={onClick5Button}>5</button>*/}
    </div>
  );
}

function Star(props: StarPropsType) {
  console.log("Star Rendering");

  const onClickSpanHandler = () => props.setValue(props.id);

  return props.choosed ? (
    <StyledStar onClick={onClickSpanHandler}>
      <b>star</b>
    </StyledStar>
  ) : (
    <StyledStar onClick={onClickSpanHandler}>star</StyledStar>
  );

  // return (
  //   <StyledStar onClick={onClickSpanHandler}>
  //     {props.choosed && <b>star</b>}
  //     {!props.choosed && <span>star</span>}
  //   </StyledStar>

  // );
}

const StyledStar = styled.span`
  & + & {
    margin-left: 10px;
  }
`;
