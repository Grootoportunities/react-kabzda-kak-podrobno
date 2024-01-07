import React, { useState } from "react";

type AccordionPropsType = {
  heading: string;
};

type AccordionTitlePropsType = {
  head: string;
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion Rendering");

  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <AccordionTitle
        head={props.heading}
        setToggle={setToggle}
        toggle={toggle}
      />
      {toggle && <AccordionBody />}
    </div>
  );
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle Rendering");

  const onClickButtonHandler = () => {
    props.setToggle(!props.toggle);
  };

  return <h3 onClick={onClickButtonHandler}>{props.head}</h3>;
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
