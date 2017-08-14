import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from 'react-native';
import themoviedb from "mover/src/services/themoviedb";
import { NoMoreCards, Card } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardsContainer: {
    flex: 1,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaaaaa'
  }
});

const CARDS_TO_DISPLAY = 5;

class CardDisplayer extends Component {

  lastZIndex = Number.MAX_SAFE_INTEGER;
  cardsNumber = 0;
  row = [];

  renderCards() {
    let i = 0;
    const previousLastCardNumber = this.cardsNumber;
    for(i = previousLastCardNumber; i < CARDS_TO_DISPLAY; i++) {
      if(this.props.cards[i]) {
        this.row.unshift(
          <Card
            key={this.props.cards[i].id}
            movie={this.props.cards[i]}
            swipeRight={(movie) => this.props.swipeRight(movie)}
            removeCard={() => {
              this.cardsNumber--;
              this.row.pop();
              this.props.removeCard();
            }}
            onClickCard={(movie) => this.props.onClickCard(movie)}
          />
        );
        this.lastZIndex--;
        this.cardsNumber++;
      }
    }

    return this.row;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          { this.props.cards &&
            this.renderCards()
          }
          { (!this.props.cards || this.props.cards.length === 0) &&
            <NoMoreCards />
          }
        </View>
        <View style={{marginBottom: 40, flex: 0}}>
         <Text style={styles.text}>Swipe LEFT to trash</Text>
         <Text style={styles.text}>or RIGHT to keep</Text>
        </View>
     </View>
    );
  }
};

CardDisplayer.propTypes = {
  cards: PropTypes.array.isRequired,
  swipeRight: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  loadCards: PropTypes.func.isRequired,
  onClickCard: PropTypes.func.isRequired,
};

export default CardDisplayer;
