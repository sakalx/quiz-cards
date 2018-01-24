import React from 'react';
import {connect} from 'react-redux';

import {Bar, DeckIcon, SearchField, SearchIcon, Wrap} from './style';

@connect(store => ({store}))
class SearchBar extends React.Component {

  handelSearch = query => {
    const {updateList, store: {decks}} = this.props;
    let queryDecks = null;

    if (query) {
      queryDecks = decks.filter(deck =>
          new RegExp('\\b' + query, 'gi').test(deck.title));
    }
    updateList(queryDecks);
  };

  render() {
    return (
        <Wrap searchBar rounded>
          <Bar>
            <SearchIcon name="ios-search"/>
            <SearchField placeholder="Search"
                         onChangeText={text => this.handelSearch(text)}
            />
            <DeckIcon name='deck'/>
          </Bar>
        </Wrap>
    );
  }
}

export default SearchBar;