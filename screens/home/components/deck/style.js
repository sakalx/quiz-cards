import styled from 'styled-components/native';
import palette from 'app/constants/Colors';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'app/assets/fonts/fontello/fontello.json';

import {Text, View} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export const Wrap = styled(View)`
  align-items: center;
  margin: 20px 30px;
`;

export const Card = styled(View)`
  position: relative;
`;

export const menu = {
  position: 'absolute',
  top: 20,
  left: 55,
};

export const Badge = styled(View)`
  align-items: center;
  transform: rotate(-8deg);
  position: absolute;
  top: 45;
  right: -45;
`;

export const BadgeTitle = styled(Text)`
  color: ${palette.primary2Color};
  font-size: 14;
`;

export const Title = styled(Text)`
  font-size: 18;
  text-align: center;
  width: 115;
  color: ${palette.primary1Color};
`;

export const DeckIcon = styled(FontelloIcon)`
 font-size: 112;
`;