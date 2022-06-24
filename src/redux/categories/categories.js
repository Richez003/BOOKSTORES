const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';
const initialState = { categories: [], showState: false };

export const checkStatus = () => ({
  type: CHECK_STATUS,
  showState: false,
});

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return { categories: ['Under construction...'] };
    default:
      return state;
  }
};

export default checkReducer;
