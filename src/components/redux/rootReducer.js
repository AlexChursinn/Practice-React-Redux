import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";

/* Получаем комбинировынный редюсер 
Принимает набор редьюсеров */
export const rootReducer = combineReducers({
  /* Добавляем наш редьюсер по ключу posts допустим*/
  posts: postsReducer,
  app: appReducer,
});
