import React, { Component, PropTypes } from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { NoMoreCards, Card } from '.';

class CardDisplayer extends Component {
  state = {
    outOfCards: false
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.cards}
        loop={false}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards loadCards={() => this.props.loadCards()} />}
        handleYup={(movie) => this.props.swipeRight(movie)}
        handleNope={() => {}}
        cardRemoved={() => this.props.removeCard()}
        showYup={false}
        showNope={false}
      />
    );
  }
};

CardDisplayer.propTypes = {
  cards: PropTypes.array.isRequired,
  swipeRight: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  loadCards: PropTypes.func.isRequired,
};

export default CardDisplayer;
