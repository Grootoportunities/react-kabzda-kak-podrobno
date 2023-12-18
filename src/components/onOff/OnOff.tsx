import styled, { css } from "styled-components";

type OnOffPropsType = {
  on: boolean;
};

export function OnOff(props: OnOffPropsType) {
  return (
    <div>
      <button>On {props.on && "*burning green*"}</button>
      <button>Off {!props.on && "*burning red*"}</button>
      <div>
        {(props.on && "*burning green*") || (!props.on && "*burning red*")}
      </div>
      {/*<SuperButton>On {props.on && "*burning green*"}</SuperButton>*/}
      {/*<SuperButton>Off {!props.on && "*burning red*"}</SuperButton>*/}
      {/*<Lamp>*/}
      {/*  {(props.on && "*burning green*") || (!props.on && "*burning red*")}*/}
      {/*</Lamp>*/}
      {/*<Lamp />*/}
    </div>
  );
}

// const SuperButton = styled.button<OnOffPropsType>`
//   ${(props) =>
//     (props.on &&
//       css<OnOffPropsType>`
//         background-color: green;
//       `) ||
//     (!props.on &&
//       css<OnOffPropsType>`
//         background-color: red;
//       `)}
// `;
//
// const Lamp = styled.div<OnOffPropsType>`
//   border-radius: 50%;
//   border: 1px black solid
//     ${(props) =>
//       (props.on &&
//         css<OnOffPropsType>`
//           background-color: green;
//         `) ||
//       (!props.on &&
//         css<OnOffPropsType>`
//           background-color: red;
//         `)};
// `;
//
// const StyledOnOff = styled.div`
//   display: flex;
// `;
