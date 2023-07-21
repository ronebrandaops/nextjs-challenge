import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import randomWord from "@/components/random-word/reducer";

//adicionar reducer aqui;
const rootReducer = combineReducers({ randomWord });

export const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));
