import React from "react";
import ReactDOM from "react-dom/client";
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import App from "./App";
import { rootReducer } from "./components/redux/rootReducer";
import reportWebVitals from "./reportWebVitals";
/* Связывает React и Redux */
import { Provider } from "react-redux";
import thunk from "redux-thunk";
/* Логика проверки на плохие слова */
import { forbiddenWordsMiddleware } from "./components/redux/middleware";
/* Подключаем saga */
import createSagaMiddleware from "@redux-saga/core";
import { sagaWatcher } from "./components/redux/sagas";

/* Создаём saga */
const saga = createSagaMiddleware();

/* 1) Шаг
Создаём store
2) Импортируем Provider чтобы связать react и redux и передаем нашим компонентам store
*/

/* createStore уже устарел */
/* Передаем в createStore основной rootReducer 
в compose передаем значение для redux devtools extension */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    /* Обращаемся к глобальному объекту виндов и спрашиваем есть ли у нас ключ и если да то объединяем */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

/* Привязываем слушателя которого создали */
saga.run(sagaWatcher);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Передаем store нашим компонентам */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
