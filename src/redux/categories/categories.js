export const checkStatus = () => ({ type: 'CHECK_STATUS' });
const initialState = [];

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under construction';
    default:
      return state;
  }
};

export default checkReducer;
