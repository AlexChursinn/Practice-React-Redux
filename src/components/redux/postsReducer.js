/* Редьюсер это чистая функция которая приимает state and action и возвращет state */

import { CREATE_POST, FETCH_POSTS } from "./types";

/* По умолчанию нам нужен state */
const initialState = {
  posts: [],
  fetchedPosts: [],
};

//Pure Functions
/* Если state не поределен по умолчанию тогда убдет принимать initialState */
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      /* Или так 
			return { ...state, posts: state.posts.concat([action.payload]) };
			*/
      return { ...state, posts: [...state.posts, action.payload] };
    /* Логика загрузки постов с сервера */
    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
};
