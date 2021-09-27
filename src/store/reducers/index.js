const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_EVENT":
      return [...state, action.payload];
    case "REMOVE_AN_EVENT":
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
};

export default eventsReducer;
