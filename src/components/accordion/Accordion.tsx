import React from "react";
import { ItemType } from "./Accordion.stories";

type AccordionPropsType = {
  heading: string;
  turned: boolean;
  onClick: () => void;
  items: ItemType[]; //Список который будет приходить для AccordionBody
  onClickCallback: (id: string) => void;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion Rendering");

  return (
    <div>
      <AccordionTitle head={props.heading} onClick={props.onClick} />
      {!props.turned && (
        <AccordionBody
          items={props.items}
          onClickCallback={props.onClickCallback}
        />
      )}
    </div>
  );
}

type AccordionTitlePropsType = {
  head: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle Rendering");

  const onClickHandler = () => props.onClick();

  return <h3 onClick={onClickHandler}>{props.head}</h3>;
}

type AccordionBodyProps = {
  items: ItemType[];
  onClickCallback: (id: string) => void;
};

function AccordionBody(props: AccordionBodyProps) {
  console.log("AccordionBody Rendering");

  const onClickHandler = (id: string) => props.onClickCallback(id);

  return (
    <ul>
      {props.items.map((i) => (
        <li onClick={() => onClickHandler(i.id)} key={i.id}>
          {i.title}
        </li>
      ))}
    </ul>
  );
}
