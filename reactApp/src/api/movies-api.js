export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=b6eb39fda4d341dbdd801ba012e88191&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };