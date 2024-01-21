import React, { useReducer } from "react";
import { reducer, TOGGLE } from "./reducer";

type AccordionPropsType = {
  heading: string;
};

type AccordionTitlePropsType = {
  head: string;
  toggle: boolean;
  setToggle: () => void;
  // setToggle: (toggle: boolean) => void;
};

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo);
const AccordionTitle = React.memo(AccordionTitleMemo);
const AccordionBody = React.memo(AccordionBodyMemo);

export function UncontrolledAccordionMemo(props: AccordionPropsType) {
  console.log("Accordion Rendering");

  // const [toggle, setToggle] = useState(true); Вместо setToggle теперь занимается dispatch.
  // В него передаём название (type) инструкции, по которой редюсер должен изменить стейт.
  // В редюсер передаём первым значением функцию редюсера, вторым - иницилизационный стейт.

  const [state, dispatch] = useReducer(reducer, { toggle: false });

  return (
    <div>
      <AccordionTitle
        head={props.heading}
        toggle={state.toggle}
        setToggle={() => dispatch({ type: TOGGLE })}
        // setToggle={setToggle} Вместо setToggle теперь dispatch. Передали в него инструкцию (объект),
        // в котором обязательно сидит type (название инструкции)
      />
      {state.toggle && <AccordionBody />}
    </div>
  );
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {
  console.log("AccordionTitle Rendering");

  const onClickButtonHandler = () => props.setToggle();
  // props.setToggle(!props.toggle); // Раньше передавал функцию setToggle, сейчас этим занимается dispatch

  return <h3 onClick={onClickButtonHandler}>{props.head}</h3>;
}

function AccordionBodyMemo() {
  console.log("AccordionBody Rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
