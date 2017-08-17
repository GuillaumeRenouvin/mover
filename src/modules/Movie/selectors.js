import _ from 'lodash';

export const getMoviesSelector = (state: _State) => state.movie.movies;

export const getGenresSelector = (state: _State) => state.movie.genres;

export const getArrayIdGenresSelector = (state: _State, genre_ids) => {
  return _.map(genre_ids, genre_id => {
    return (_.find(state.movie.genres, {id: genre_id})).name
  });
}
