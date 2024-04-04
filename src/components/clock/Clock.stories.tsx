import { Clock } from "./Clock";

export default {
  title: "Clock",
  component: Clock,
};

export const StandartClock = () => <Clock format={"HH:MM:SS"} />;
export const MinutesFirstFormatClock = () => <Clock format={"MM:HH:SS"} />;
export const SecondsFirstFormatClock = () => <Clock format={"SS:MM:HH"} />;

export const WithoutFormatClock = () => <Clock />;
