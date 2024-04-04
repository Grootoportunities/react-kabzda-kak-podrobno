import React, { FC, useEffect, useState } from "react";

type FormatType = "HH:MM:SS" | "MM:HH:SS" | "SS:MM:HH";

type ClockProps = {
  format?: FormatType;
};

const getTime = (time: number) => (time < 10 ? "0" + time : time);

export const Clock: FC<ClockProps> = ({ format }) => {
  const [time, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  return (
    <>
      <span>
        {format === "HH:MM:SS"
          ? getTime(time.getHours())
          : format === "MM:HH:SS"
            ? getTime(time.getMinutes())
            : getTime(time.getSeconds())}
      </span>
      <span>:</span>
      <span>
        {format === "MM:HH:SS"
          ? getTime(time.getHours())
          : getTime(time.getMinutes())}
      </span>
      <span>:</span>
      <span>
        {format === "SS:MM:HH"
          ? getTime(time.getHours())
          : getTime(time.getSeconds())}
      </span>
    </>
  );
};
