import { CHANGE_ON_FALSE, CHANGE_ON_TRUE, reducer, StateType } from "./reducer";

test("Toggle should change to true", () => {
  const state: StateType = { toggle: false };

  const newState = reducer(state, { type: CHANGE_ON_TRUE });

  expect(newState.toggle).toBe(true);
});

test("Toggle should change to false", () => {
  const state: StateType = { toggle: true };
  const newState = reducer(state, { type: CHANGE_ON_FALSE });

  expect(newState.toggle).toBe(false);
});

test("Reducer should throw error", () => {
  const state: StateType = { toggle: true };

  expect(() => {
    reducer(state, { type: "FAKETYPE" });
  }).toThrowError();
});
