import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {Constants} from 'expo';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {Header, Icon, Input, Item} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export const Wrap = styled(Header)`
  background-color: ${palette.bodyBackground};
  padding-top: ${Constants.statusBarHeight}; 
  padding-left: 0; 
  padding-right: 0;
`;
export const Bar = styled(Item)`
  background-color: ${palette.alternateBackground};
  padding: 5px;
`;
export const SearchField = styled(Input)`
  background-color: ${palette.alternateBackground};
  color: #fff;
`;
export const SearchIcon = styled(Icon)`
 color: ${palette.defaultColor};
`;
export const DeckIcon = styled(FontelloIcon)`
 color: ${palette.defaultColor};
 font-size: 24;
 `;