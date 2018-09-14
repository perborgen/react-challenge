const form = (state = {}, action) => {
  switch (action.type) {
    case 'INITIAL_STATE': {
      return action.state;
    }

    case 'DISPLAY_NAME': {
      const newState = {
        ...state,
        name: action.name,
      };
      return newState;
    }

    default: return state;
  }
};

export default form;
