const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "Add_Transaction":
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    case "Delete_Transaction":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default GlobalReducer;
