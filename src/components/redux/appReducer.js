import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./types";

/* Изначально ничего не грузим */
const initialState = {
  loading: false,
  alert: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Логика Loader */
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    /* Логика Alert
		action.payload так как будем передавать текст
		*/
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
