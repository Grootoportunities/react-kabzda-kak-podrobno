import React from "react";
import styled from "styled-components";

export function Rating(props: { value?: 1 | 2 | 3 | 4 | 5 }) {
  console.log("Rating Rendering");

  switch (props.value) {
    case 1:
      return (
        <div>
          <Star choosed />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      );
    case 2:
      return (
        <div>
          <Star choosed />
          <Star choosed />
          <Star />
          <Star />
          <Star />
        </div>
      );
    case 3:
      return (
        <div>
          <Star choosed />
          <Star choosed />
          <Star choosed />
          <Star />
          <Star />
        </div>
      );
    case 4:
      return (
        <div>
          <Star choosed />
          <Star choosed />
          <Star choosed />
          <Star choosed />
          <Star />
        </div>
      );
    case 5:
      return (
        <div>
          <Star choosed />
          <Star choosed />
          <Star choosed />
          <Star choosed />
          <Star choosed />
        </div>
      );
    default:
      return (
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      );
  }
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
