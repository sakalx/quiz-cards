import React from 'react';
import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {Constants} from 'expo';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {TouchableOpacity} from 'react-native';
import {Header, Icon, Item, Title} from 'native-base';

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
const BarTitle = styled(Title)`
  flex: 1;
`;
const ArrowIcon = styled(Icon)`
 color: ${palette.defaultColor};
`;
const DeckIcon = styled(FontelloIcon)`
 color: ${palette.defaultColor};
 font-size: 24;
 `;

class AppBar extends React.Component {

  render() {
    const {navigate, state: {params: {deck}}} = this.props.navigation;

    return (
        <Wrap searchBar>
          <Bar>
            <TouchableOpacity onPress={() => navigate('Home')}>
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