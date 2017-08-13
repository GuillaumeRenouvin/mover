import { connect } from 'react-redux';
import MovieDetail from './MovieDetail.component';

const mapStateToProps = (state, props) => ({
  ...props.navigation.state.params
});

const mapDispatchToProps = () => ({});

const MovieDetailContainer = connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

export default MovieDetailContainer;
