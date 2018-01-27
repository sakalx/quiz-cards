import React from 'react';
import {connect} from 'react-redux';
import {removeDeck} from 'redux-core/actions/decks';
import {showSnack} from 'redux-core/actions/snack';
import snackId from 'components/popup/snack/constants';

import {TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

import ActionsMenu from 'components/popup/dropdown/ActionsMenu';
import RemoveMessage from 'components/popup/snack/remove-message/RemoveMessage';

import {Badge, BadgeTitle, Card, DeckIcon, menu, Title, Wrap} from './style';

@connect(store => {
  return {
    dispatch: store.dispatch,
  };
})

class Deck extends React.PureComponent {
  _dispatch = this.props.dispatch;

  async _remove(id) {
    await this[id].bounceOut(500);
    this._dispatch(removeDeck(id));
  }

  handelRemoveDeck(id) {
    this[id].rubberBand(500);
    this._dispatch(showSnack({
      openSnack: snackId.HOME_SCREEN,
      duration: 3000,
      content: <RemoveMessage title='DECK'
                              handelRemove={() => this._remove(id)}
      />,
    }));
  };

  render() {
    const {deck, navigate} = this.props;
    const countQuestions = Object.keys(deck.questions).length;

    return (
        <Animatable.View ref={c => this[deck.id] = c}>
          <Wrap>
            <Card>
              <ActionsMenu style={menu}
                           actions={{
                             remove: () => this.handelRemoveDeck(deck.id),
                             edit: () => navigate('UpdateDeck', {deck}),
                           }}
              />
              <Badge>
                <BadgeTitle>{countQuestions}</BadgeTitle>
                <BadgeTitle>
                  {countQuestions === 1
                      ? 'question '
                      : 'questions'
                  }
                </BadgeTitle>
              </Badge>
            </Card>
            <TouchableOpacity onPress={() => navigate('Quiz', {deck})}>
              <DeckIcon name='deck-o'
                        color={deck.iconColor}
              />
            </TouchableOpacity>
            <Title>{deck.title}</Title>
          </Wrap>
        </Animatable.View>
    );
  }
}

export default Deck;