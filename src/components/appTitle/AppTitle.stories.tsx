import { AppTitle } from "./AppTitle";

export default {
  title: "AppTitle",
  component: AppTitle,
};

export const AppTitleStory = () => <AppTitle topic={"It is title of app"} />;
export const AppTitleAnother = () => <AppTitle topic={"Another title"} />;
