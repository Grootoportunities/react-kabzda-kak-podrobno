import React from "react";

type AccordionPropsType = {
  heading: string;
  turned?: boolean;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion Rendering");

  if (props.turned) {
    return (
      <div>
        <AccordionTitle head={props.heading} />
      </div>
    );
  } else {
    return (
      <div>
        <AccordionTitle head={props.heading} />
        <AccordionBody />
      </div>
    );
  }
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
