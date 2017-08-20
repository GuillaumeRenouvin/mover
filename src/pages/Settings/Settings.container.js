import { connect } from 'react-redux';
import { getGenresSelector, loadGenresCreator } from 'mover/src/modules/Movie';
import { addGenreIdsCreator, removeGenreIdsCreator, getUserGenresIdsSelector } from 'mover/src/modules/User';
import Settings from './Settings.component';

const mapStateToProps = state => ({
  genres: getGenresSelector(state),
  userGenreIds: getUserGenresIdsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadGenres: () => dispatch(loadGenresCreator()),
  addGenreIds: (genreId) => {
    dispatch(addGenreIdsCreator(genreId));
  },
  removeGenreIds: (genreId) => {
    dispatch(removeGenreIdsCreator(genreId));
  },
});

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;
