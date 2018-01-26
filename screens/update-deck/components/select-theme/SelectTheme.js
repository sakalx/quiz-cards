import React from 'react';
import palette, {deckTheme} from 'constants/Colors';
import {attention} from 'constants/animations';

import {FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {CheckIcon, DeckButton, DeckIcon, SelectColoRTitle, Wrap} from './style';

class SelectTheme extends React.Component {

  handelSelectTheme(colorSelected) {
    this.props.handelSelectThemeCB(colorSelected);
    this[colorSelected][attention()](800);
  }

  render() {
    const {colorSelected} = this.props;

    return (
        <Wrap>
          <SelectColoRTitle>
            {colorSelected === palette.defaultColor
                ? 'Select Theme'
                : `Deck Theme: ${deckTheme[colorSelected]}`
            }
          </SelectColoRTitle>
          <FlatList data={Object.keys(deckTheme)}
                    keyExtractor={item => item}
                    numColumns={3}
                    horizontal={false}
                    renderItem={({item: color}) => (
                        <Animatable.View ref={c => this[color] = c}>
                          <DeckButton onPress={() => this.handelSelectTheme(color)}>
                            <DeckIcon name='deck' color={color}/>
                            {colorSelected === color &&
                            <CheckIcon name='checkbox'/>
                            }
                          </DeckButton>
                        </Animatable.View>
                    )}
          />
        </Wrap>
    );
  }
}

export default SelectTheme;