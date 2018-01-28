import styled from 'styled-components/native';
import palette from 'app/constants/Colors';

import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'app/assets/fonts/fontello/fontello.json';

import {TouchableOpacity} from 'react-native';
import {Icon, Text, View} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export const Wrap = styled(View)`
  margin-bottom: 132;
`;

export const SelectColoRTitle = styled(Text)`
	color: ${palette.primary2Color};
  margin: 15px;
`;

export const DeckButton = styled(TouchableOpacity)`
  position: relative;
`;

export const DeckIcon = styled(FontelloIcon)`
  fontSize: 82;
  margin: 15px;
`;

export const CheckIcon = styled(Icon)`
  position: absolute;
  top: 45;
  left: 47;
  color: ${palette.defaultColor};
  font-size: 38;
  transform: rotate(-8deg);
`;