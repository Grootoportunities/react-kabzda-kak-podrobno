type ActionType = { type: string };
export type StateType = { toggle: boolean };
export const TOGGLE = "TOGGLE";
export const CHANGE_ON_TRUE = "CHANGE-ON-TRUE";
export const CHANGE_ON_FALSE = "CHANGE-ON-FALSE";

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, toggle: !state.toggle };

    case CHANGE_ON_TRUE:
      return { ...state, toggle: true };

    case CHANGE_ON_FALSE:
      return { ...state, toggle: false };

    default:
      throw new Error("Unknown action type");
  }
};
