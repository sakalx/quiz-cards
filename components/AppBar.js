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

class AppBar extends React.Component {

  render() {
    const {goBack, state: {params: {deck}}} = this.props.navigation;

    return (
        <Wrap>
          <Bar>
            <TouchableOpacity onPress={() => goBack()}>
              <Icon name='arrow-back'
                    style={{color: palette.defaultColor}}/>
            </TouchableOpacity>
            <BarTitle>{deck.title}</BarTitle>
            <FontelloIcon name='post-o'
                          size={24}
                          color={palette.defaultColor}
            />
          </Bar>
        </Wrap>
    );
  }
}

export default AppBar;