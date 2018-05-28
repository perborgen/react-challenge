const presentation = (state = {}, action) => {
  switch (action.type) {
    case 'INITIAL_STATE':
      return action.state;

    case 'DISPLAY_NAME':
      return action.name;

    default: return state;
  }
};

export default presentation;
