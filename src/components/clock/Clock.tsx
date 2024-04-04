import React, { FC, useEffect, useState } from "react";
import { DigitalClockMode } from "./DigitalClockMode";
import { AnalogClockMode } from "./AnalogClockMode";

type FormatType = "HH:MM:SS" | "MM:HH:SS" | "SS:MM:HH";

type ClockProps = {
  format?: FormatType;
  mode: "digital" | "analog";
};

export type ClockModeProps = {
  format?: FormatType;
  time: Date;
};

export const Clock: FC<ClockProps> = ({ format, mode }) => {
  const [time, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  let clockMode;

  switch (mode) {
    case "analog":
      clockMode = <AnalogClockMode time={time} />;
      break;
    case "digital":
    default:
      clockMode = <DigitalClockMode time={time} format={format} />;
  }

  return <div>{clockMode}</div>;
};
