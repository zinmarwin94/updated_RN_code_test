import { POPULAR_MOVIES_DATA } from "../actions/actionTypes";

const initialState = {
  popular_movies: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_MOVIES_DATA:
      return {
        ...state,
        popular_movies: action.movies
      }; 
    default:
      return state;
  }
};

export default reducer;
