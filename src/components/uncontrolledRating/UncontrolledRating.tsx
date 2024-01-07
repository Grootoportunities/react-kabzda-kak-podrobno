import React, { useState } from "react";
import styled from "styled-components";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5;
type StarPropsType = {
  choosed: boolean;
  setValue: () => void;
};

type UncontrolledRatingProps = {
  defaultValue?: ValueType;
  onChange: (value: ValueType) => void;
};

export function UncontrolledRating(props: UncontrolledRatingProps) {
  console.log("Rating Rendering");

  const [value, setValue] = useState<ValueType>(
    props.defaultValue ? props.defaultValue : 0,
  );

  return (
    <div>
      <Star
        choosed={value >= 1}
        setValue={() => {
          setValue(1);
          props.onChange(1);
        }}
      />
      <Star
        choosed={value >= 2}
        setValue={() => {
          setValue(2);
          props.onChange(2);
        }}
      />
      <Star
        choosed={value >= 3}
        setValue={() => {
          setValue(3);
          props.onChange(3);
        }}
      />
      <Star
        choosed={value >= 4}
        setValue={() => {
          setValue(4);
          props.onChange(4);
        }}
      />
      <Star
        choosed={value >= 5}
        setValue={() => {
          setValue(5);
          props.onChange(5);
        }}
      />
    </div>
  );
}

function Star(props: StarPropsType) {
  console.log("Star Rendering");

  const onClickSpanHandler = () => {
    props.setValue();
  };

  return (
    <StyledStar onClick={onClickSpanHandler}>
      {props.choosed ? <b>star</b> : "star"}
    </StyledStar>
  );
}

const StyledStar = styled.span`
  & + & {
    margin-left: 10px;
  }
`;
