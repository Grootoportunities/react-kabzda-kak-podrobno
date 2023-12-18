import React from "react";

type AccordionPropsType = {
  heading: string;
  turned?: boolean;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion Rendering");

  return (
    <div>
      <AccordionTitle head={props.heading} />
      {!props.turned && <AccordionBody />}
    </div>
  );
}

function AccordionTitle(props: { head: string }) {
  console.log("AccordionTitle Rendering");
  return <h3>{props.head}</h3>;
}

function AccordionBody() {
  console.log("AccordionBody Rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
