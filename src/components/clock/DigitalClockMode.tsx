import React, { FC } from "react";
import { ClockModeProps } from "./Clock";

export const getTime = (time: number) => (time < 10 ? "0" + time : time);

export const DigitalClockMode: FC<ClockModeProps> = ({ format, time }) => {
  let first;
  let second;
  let third;

  switch (format) {
    case "MM:HH:SS": {
      first = getTime(time.getMinutes());
      second = getTime(time.getHours());
      third = getTime(time.getSeconds());
      break;
    }

    case "SS:MM:HH": {
      first = getTime(time.getSeconds());
      second = getTime(time.getMinutes());
      third = getTime(time.getHours());
      break;
    }

    case "HH:MM:SS":
    default: {
      first = getTime(time.getHours());
      second = getTime(time.getMinutes());
      third = getTime(time.getSeconds());
    }
  }

  return (
    <>
      <span>{first}</span>
      <span>:</span>
      <span>{second}</span>
      <span>:</span>
      <span>{third}</span>
    </>
  );
};
