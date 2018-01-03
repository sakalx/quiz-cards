import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {Constants} from 'expo';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {Header, Icon, Input, Item} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

const Wrap = styled(Header)`
  background-color: ${palette.bodyBackground};
  padding-top: ${Constants.statusBarHeight}; 
  padding-left: 0; 
  padding-right: 0;
`;
const Bar = styled(Item)`
  background-color: ${palette.alternateBackground};
  padding: 5px;
`;
const SearchField = styled(Input)`
  background-color: ${palette.alternateBackground};
  color: #fff;
`;

@connect(store => ({store}))
class SearchBar extends React.Component {

  handelSearch = query => {
    const decks = this.props.store;

    const queryDecks = decks.filter(deck =>
        new RegExp('\\b' + query, 'gi').test(deck.title));

    this.props.updateList(queryDecks);
  };

  render() {
    return (
        <Wrap searchBar rounded>
          <Bar>
            <Icon name="ios-search"
                  style={{color: palette.defaultColor}}
            />
            <SearchField placeholder="Search"
                         onChangeText={text => this.handelSearch(text)}
            />
            <FontelloIcon name='post-it'
                          size={24}
                          color={palette.defaultColor}
            />
          </Bar>
        </Wrap>
    );
  }

}

export default SearchBar;