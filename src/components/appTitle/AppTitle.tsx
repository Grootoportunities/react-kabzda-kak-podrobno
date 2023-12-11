import React from "react";

export function AppTitle(props: { topic: string }) {
  console.log("AppTitle Rendering");
  return <h2>{props.topic}</h2>;
}
