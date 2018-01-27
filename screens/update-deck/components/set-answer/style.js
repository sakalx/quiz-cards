import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {Text, View} from 'native-base';
const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export const Wrap = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  color: ${palette.accent3Color};
  text-align: center;
`;

export const SubTitle = styled(Text)`
  color: ${palette.defaultColor};
`;

export const WrapButtons = styled(View)`
  width: 100%;
  margin: 25px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonTitle = styled(Text)`
 color: ${palette.primary1Color};
 font-size: 16;
`;

export const LogoIcon = styled(FontelloIcon)`
  color: ${palette.primary3Color};
  fontSize: 84;
`;