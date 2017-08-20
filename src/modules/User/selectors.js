export const getUserMoviesSelector = (state: _State) => state.user.movies;

export const getUserSeenMoviesSelector = (state: _State) => state.user.seenMovies;

export const getPageIndexSelector = (state: _State) => state.user.pageIndex;

export const getUserGenresIdsSelector = (state: _State) => state.user.configuration.genreIds;
