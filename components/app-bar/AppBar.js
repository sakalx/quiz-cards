import React from 'react';

import {TouchableOpacity} from 'react-native';
import {ArrowIcon, Bar, BarTitle, DeckIcon, Wrap} from './style';

class AppBar extends React.Component {
  render() {
    const {goBack, state: {params: {deck}}} = this.props.navigation;

    return (
        <Wrap searchBar>
          <Bar>
            <TouchableOpacity onPress={() => goBack()}>
              <ArrowIcon name='arrow-back'/>
            </TouchableOpacity>
            <BarTitle>{deck.title}</BarTitle>
            <DeckIcon name='deck-o'/>
          </Bar>
        </Wrap>
    );
  }
}

export default AppBar;