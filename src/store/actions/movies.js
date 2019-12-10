import { POPULAR_MOVIES_DATA } from "./actionTypes";

export const setPopularMoviesData = (movies) => {
  return {
    type: POPULAR_MOVIES_DATA,
    movies
  };
};
 