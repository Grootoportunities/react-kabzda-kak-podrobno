import React, { useState } from "react";

type UncontrolledOnOffProps = {
  setOn: (on: boolean) => void;
  defaultState?: boolean;
};

export const UncontrolledOnOff = React.memo(UncontrolledOnOffMemo);

export function UncontrolledOnOffMemo(props: UncontrolledOnOffProps) {
  const [on, setOn] = useState<boolean>(props.defaultState || false);

  const onOffStyle = { marginTop: "10px", display: "flex" };
  const onStyle = { backgroundColor: on ? "green" : "" };
  const offStyle = {
    marginLeft: "10px",
    backgroundColor: !on ? "red" : "",
  };
  const lampStyle = {
    width: "50px",
    height: "50px",
    border: "1px solid black",
    borderRadius: "50%",
    marginLeft: "10px",
    backgroundColor: on ? "green" : "red",
  };

  const onClickOnHandler = () => {
    setOn(true);
    props.setOn(true);
  };

  const onClickOffHandler = () => {
    setOn(false);
    props.setOn(false);
  };

  return (
    <div style={onOffStyle}>
      <button style={onStyle} onClick={onClickOnHandler}>
        On
      </button>
      <button style={offStyle} onClick={onClickOffHandler}>
        Off
      </button>
      <div style={lampStyle}></div>
    </div>
  );
}

//------------------//------------------//------------------//------------------//------------------//------------------//------------------//------------------//------------------//------------------//------------------

// type OnOffPropsType = {
//   on: boolean;
// };
//
// export function OnOff(props: OnOffPropsType) {
//   const onOffStyle = { marginTop: "10px", display: "flex" };
//   const onStyle = { backgroundColor: props.on ? "green" : "" };
//   const offStyle = {
//     marginLeft: "10px",
//     backgroundColor: !props.on ? "red" : "",
//   };
//   const lampStyle = {
//     width: "50px",
//     height: "50px",
//     border: "1px solid black",
//     borderRadius: "50%",
//     marginLeft: "10px",
//     backgroundColor: props.on ? "green" : "red"
//   };
//
//   return (
//     <div style={onOffStyle}>
//       <button style={onStyle}>On</button>
//       <button style={offStyle}>Off</button>
//       <div style={lampStyle}></div>
//     </div>
//   );
// }

//---------------------------//---------------------------//---------------------------//---------------------------//---------------------------

// export function OnOff(props: OnOffPropsType) {
//   return (
//     <div>
//       <button>On {props.on && "*burning green*"}</button>
//       <button>Off {!props.on && "*burning red*"}</button>
//       <div>
//         {(props.on && "*burning green*") || (!props.on && "*burning red*")}
//       </div>
//     </div>
//   );
// }
