import { v4 as uuidv4 } from 'uuid';

const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';
const initialState = { categories: [], showState: false, id: uuidv4() };

export const checkStatus = (id) => ({
  type: CHECK_STATUS,
  showState: false,
  id,

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
