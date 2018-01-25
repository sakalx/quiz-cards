import styled, {css} from 'styled-components/native';
import palette from 'constants/Colors';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {Button, Container, Icon, Text, View} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export const Wrap = styled(Container)`
  background-color: ${palette.bodyBackground};
`;

export const Body = styled(View)`
  background-color: ${palette.bodyBackground};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${palette.defaultColor};
  font-size: 34;
`;

export const Subtitle = styled(Text)`
  ${props => props.color && css`
    color: ${props.color};
  `}
  font-size: 21;
`;

export const ButtonLayout = styled(Button)`
  flex-direction: row;
  background-color: ${palette.alternateBackground};
`;

export const ButtonTitle = styled(Text)`
  color: ${palette.primary1Color};
`;

export const LogoIcon = styled(FontelloIcon)`
  ${props => props.color && css`
    color: ${props.color};
  `}
 font-size: 128;
`;

export const HomeIcon = styled(Icon)`
  color: ${palette.primary1Color};
  font-size: 28;
`;

export const ResetIcon = styled(FontelloIcon)`
  color: ${palette.primary1Color};
  font-size: 28;
`;