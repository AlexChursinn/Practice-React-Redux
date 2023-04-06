/* Делаем middleware на обратботку слов в форме
 */

import { showAlert } from "./actions";
import { CREATE_POST } from "./types";

/* Слова которые не должны вводиться */
const forbidden = ["fuck", "spam", "php"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        /* фильтруем слова из forbidden */
        const found = forbidden.filter((w) => action.payload.title.includes(w));
        /* Если хоть одно слово есть вызовем Alert */
        if (found.length) {
          return dispatch(showAlert("Вы спамер."));
        }
      }
      return next(action);
    };
  };
}
