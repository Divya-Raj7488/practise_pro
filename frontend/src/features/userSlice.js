const reducerFunction = (state = { age: 0 }, action) => {
  if (action.type === "increment") {
    return {
      age: state.age + 1,
    };
  }
  if (action.type === "decrement") {
    if (state.age > 1) {
      return {
        age: state.age - 1,
      };
    }
    return state;
  }
  return state;
};
export default reducerFunction
