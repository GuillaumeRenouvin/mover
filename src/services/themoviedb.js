const themoviedb = {
  token: '2a9af927136b2fb30d7ee5375b467c72',
  url: `https://api.themoviedb.org/3`,

  discover(options) {
    return fetch(
      `${themoviedb.url}/discover/movie?api_key=${themoviedb.token}&page=${options.pageIndex}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      return response.json();
    })
  },

  getCoverUrl(url) {
    return `https://image.tmdb.org/t/p/w1280${url}`;
  }
}

export default themoviedb;
