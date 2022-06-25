const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SERz0T6MOlfncfi0umcc/books';

const initialState = [];

export const retrieveItems = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const retrieveBook = async (dispatch) => {
  const booksItems = await fetch(`${APIurl}`)
    .then((res) => res.json());
  const booksId = Object.keys(booksItems);
  const newItems = [];
  booksId.map((key) => newItems.push({
    id: key,
    title: booksItems[key][0].title,
    author: booksItems[key][0].author,
    category: booksItems[key][0].category,
  }));
  dispatch(retrieveItems(newItems));
};

export const postBooks = (action) => async (dispatch) => {
  await fetch(`${APIurl}`, {
    method: 'POST',
    body: JSON.stringify({
      book_id: action.book_id,
      title: action.title,
      author: action.author,
      category: action.category,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(action));
};

export const deleteItems = (id) => async (dispatch) => {
  await fetch(`${APIurl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      book_id: id,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

export default booksReducer;
