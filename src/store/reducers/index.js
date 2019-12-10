import { combineReducers } from "redux";

import moviesReducer from "./movies";

const rootReducer = combineReducers({
  popular_movies: moviesReducer
});

export default rootReducer;
