import React from "react";
import styled from "styled-components";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

export function Rating(props: RatingPropsType) {
  console.log("Rating Rendering");

  return (
    <div>
      <Star choosed={props.value >= 1} />
      <Star choosed={props.value >= 2} />
      <Star choosed={props.value >= 3} />
      <Star choosed={props.value >= 4} />
      <Star choosed={props.value >= 5} />
    </div>
  );
}

function Star(props: { choosed?: boolean }) {
  console.log("Star Rendering");

  if (props.choosed) {
    return (
      <StyledStar>
        <b>star</b>
      </StyledStar>
    );
  } else return <StyledStar>star</StyledStar>;
}

const StyledStar = styled.span`
  & + & {
    margin-left: 10px;
  }
`;
