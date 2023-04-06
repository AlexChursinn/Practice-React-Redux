import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

/* ====== */

/* Loader */
export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

/* ====== */

/* Alert */
export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    /* Скрываем Alert через три секунды */
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

/* ====== */
/* Post сихронный */
export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

/* ====== */

/* Post асихронный */
export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  };
  /*   return async (dispatch) => {
    try {
      dispatch(showLoader());  Когда начинаем грузить loader 
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(hideLoader());  Когда загрузка закончилась вырубаем loader 
    } catch (e) {
      dispatch(showAlert("Что-то пошло не так"));
      dispatch(hideLoader());
    }
  }; */
}

/* ====== */
