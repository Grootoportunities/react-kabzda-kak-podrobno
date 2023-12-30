import React from "react";
import styled from "styled-components";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  value: RatingValueType;
  onClick: (ratingValue: RatingValueType) => void;
};

export function Rating(props: RatingPropsType) {
  console.log("Rating Rendering");

  return (
    <div>
      <Star choosed={props.value >= 1} onClick={props.onClick} value={1} />
      <Star choosed={props.value >= 2} onClick={props.onClick} value={2} />
      <Star choosed={props.value >= 3} onClick={props.onClick} value={3} />
      <Star choosed={props.value >= 4} onClick={props.onClick} value={4} />
      <Star choosed={props.value >= 5} onClick={props.onClick} value={5} />
    </div>
  );
}

type StarType = {
  choosed: boolean;
  onClick: (ratingValue: RatingValueType) => void;
  value: RatingValueType;
};

function Star(props: StarType) {
  console.log("Star Rendering");

  const onClickStarHandler = () => props.onClick(props.value);

  return (
    <StyledStar onClick={onClickStarHandler}>
      {props.choosed ? <b>star </b> : "star "}
    </StyledStar>
  );
}

const StyledStar = styled.span`
  & + & {
    margin-left: 10px;
  }
`;
