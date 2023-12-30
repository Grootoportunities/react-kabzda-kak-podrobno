import React from "react";

type AccordionPropsType = {
  heading: string;
  turned: boolean;
  onClick: () => void;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion Rendering");

  return (
    <div>
      <AccordionTitle head={props.heading} onClick={props.onClick} />
      {!props.turned && <AccordionBody />}
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

//-----------------------------------------------

// import React from "react";
//
// type AccordionPropsType = {
//   heading: string;
//   turned: boolean;
//   onClick: (turned: boolean) => void;
// };
//
// export function Accordion(props: AccordionPropsType) {
//   console.log("Accordion Rendering");
//
//   return (
//     <div>
//       <AccordionTitle
//         head={props.heading}
//         onClick={() => props.onClick(!props.turned)}
//         turned={props.turned}
//       />
//       {!props.turned && <AccordionBody />}
//     </div>
//   );
// }
//
// type AccordionTitlePropsType = {
//   head: string;
//   onClick: (turned: boolean) => void;
//   turned: boolean;
// };
//
// function AccordionTitle(props: AccordionTitlePropsType) {
//   console.log("AccordionTitle Rendering");
//
//   const onClickHandler = () => props.onClick(props.turned);
//
//   return <h3 onClick={onClickHandler}>{props.head}</h3>;
// }
//
// function AccordionBody() {
//   console.log("AccordionBody Rendering");
//   return (
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ul>
//   );
// }
