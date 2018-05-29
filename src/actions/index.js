export const initialState = state => ({
  state,
  type: 'INITIAL_STATE',
});

export const displayName = name => ({
  type: 'DISPLAY_NAME',
  name,
});
