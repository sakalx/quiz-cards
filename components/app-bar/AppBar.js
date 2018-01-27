import React from 'react';

import {TouchableOpacity} from 'react-native';
import {ArrowIcon, Bar, BarTitle, DeckIcon, Wrap} from './style';

const AppBar = props => {
  const {goBack, state: {params: {deck}}} = props.navigation;
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
};

export default AppBar;