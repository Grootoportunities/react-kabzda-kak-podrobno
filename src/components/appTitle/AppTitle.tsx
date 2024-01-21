import React from "react";

export const AppTitle = React.memo(AppTitleMemo);

export function AppTitleMemo(props: { topic: string }) {
  console.log("AppTitle Rendering");
  return <h2>{props.topic}</h2>;
}
