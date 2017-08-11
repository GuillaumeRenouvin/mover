import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import appStyle from 'mover/src/appStyle';
import themoviedb from "mover/src/services/themoviedb";
import { Row } from '.';

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 0,
    padding: 10
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'cover',
    backgroundColor: '#d3d3d3'
  },
  title: {
    fontSize: 17,
    fontWeight: '500'
  },
  content: {
    fontSize: 13,
    color: 'gray'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  divider: {
    borderColor: '#d3d3d3',
    borderWidth: 0.3,
  },
});

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      damping: 1-0.6,
      tension: 300
    };
  }

  render() {
    return (
      <Row
        isAddEnabled
        damping={this.state.damping}
        tension={this.state.tension}
        onDelete={() => this.props.onDelete()}
        onAdd={() => this.props.onAdd()}
      >
        <TouchableOpacity onPress={() => {}} style={styles.container} >
          <View style={styles.iconContainer} >
            <Image style={styles.thumbnail} source={{uri: themoviedb.getCoverUrl(this.props.movie.poster_path)}} />
          </View>
          <View style={styles.contentContainer} >
            <View style={styles.textContainer}>
              <Text style={styles.title} >{this.props.movie.original_title}</Text>
              <Text style={styles.content} >{this.props.movie.release_date} - {this.props.movie.vote_average}/10</Text>
            </View>
            <View style={styles.divider} />
          </View>
        </TouchableOpacity>
      </Row>
    );
  }
}

ListItem.PropsType = {
  movie: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func
};

export default ListItem;
