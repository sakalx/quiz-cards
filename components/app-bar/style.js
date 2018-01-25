import React from 'react';
import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {Constants} from 'expo';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';
import {Header, Icon, Item, Title} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export const Wrap = styled(Header)`
  background-color: ${palette.bodyBackground};
  padding-top: ${Constants.statusBarHeight};
  padding-left: 0; 
  padding-right: 0;
`;

export const Bar = styled(Item)`
  background-color: ${palette.alternateBackground};
  padding: 15px;
`;

export const BarTitle = styled(Title)`
  flex: 1;
`;

export const ArrowIcon = styled(Icon)`
  color: ${palette.defaultColor};
`;

export const DeckIcon = styled(FontelloIcon)`
  color: ${palette.defaultColor};
  font-size: 24;
`;