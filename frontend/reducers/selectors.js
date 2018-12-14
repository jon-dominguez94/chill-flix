export const selectMovie = (movies, title) => {
  // debugger
  const match = movies.filter(movie => movie.title === title);
  return match.length ? match[0] : {title: ""};

};