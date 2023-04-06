import { takeEvery, put, call } from "redux-saga/effects";
import { hideLoader, showAlert, showLoader } from "./actions";
import { FETCH_POSTS, REQUEST_POSTS } from "./types";

/* Saga ожидает генератор функцию */

export function* sagaWatcher() {
  /* takeEvery говорит что нам надо обрабытьвать каждый action который поступает в store */
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    /* put позволяет диспачить определенные события в store */
    yield put(showLoader());
    /* Ждём пока выполнится функция fetchPosts */
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Что-то пошло не так"));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
