// ACTIONS TYPES
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

// ACTIONS CREATORS
export const incrementCount = () => ({
  type: INCREMENT_COUNT
});

export const decrementCount = () => ({
  type: DECREMENT_COUNT
});

export const decrementCountIf = () => {
  return (dispatch, getState) => {
    //if the actual state of the counter is 0 do nothing
    if (getState() <= 0) {
      console.log("i have tried but the state is 0 mah dude!");
      return;
    }

    //if the actual state of the counter is > 0 decrement it
    dispatch(decrementCount());
  };
};
