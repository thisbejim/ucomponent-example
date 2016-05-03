import Immutable from 'immutable';

const immutableState = Immutable.Map({});

export const reducer = (state = immutableState, action) => {
  switch (action.type) {
    case "EXAMPLE":
      return state.set("data", "example");

    default:
      return state
  }
}
