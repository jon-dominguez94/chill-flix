export const selectMovie = (movies, title) => {
  // const match = movies.filter(movie => movie.title === title);
  // return match.length ? match[0] : {title: ""};
  return movies.filter(movie => movie.title === title)[0];
};