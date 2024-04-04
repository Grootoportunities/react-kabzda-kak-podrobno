import { Clock } from "./Clock";

export default {
  title: "Clock",
  component: Clock,
};

export const StandartClock = () => (
  <Clock format={"HH:MM:SS"} mode={"digital"} />
);
export const MinutesFirstFormatClock = () => (
  <Clock format={"MM:HH:SS"} mode={"digital"} />
);
export const SecondsFirstFormatClock = () => (
  <Clock format={"SS:MM:HH"} mode={"digital"} />
);
export const WithoutFormatClock = () => <Clock mode={"digital"} />;
export const AnalogClock = () => <Clock mode={"analog"} />;
