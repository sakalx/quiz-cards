import React from 'react';
import palette, {deckTheme} from 'app/constants/Colors';
import {attention} from 'app/constants/animations';

import {FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {CheckIcon, DeckButton, DeckIcon, SelectColoRTitle, Wrap} from './style';

const ThemesList = props => {
  const {colorSelected} = props;

  const handelSelectTheme = colorSelected => {
    props.handelSelectThemeCB(colorSelected);
    this[colorSelected][attention()](800);
  };

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
                        <DeckButton onPress={() => handelSelectTheme(color)}>
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
};

export default ThemesList;