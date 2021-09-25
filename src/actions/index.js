export const addEvent = (obj) => {
  return {
    type: 'ADD_NEW_EVENT',
    payload: obj
  };
};

export const removeEvent = (index) => {
  return {
    type: 'REMOVE_AN_EVENT',
    payload: index
  };
};