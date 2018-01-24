import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {createIconSetFromFontello, Entypo} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';
import {MenuOption} from 'react-native-popup-menu';
import {Icon, Text} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export const optionsContainer = {
  backgroundColor: palette.alternateBackground,
  width: 130,
  paddingLeft: 5,
};

export const Option = styled(MenuOption)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
 `;

export const TitleDelete = styled(Text)`
  color: ${palette.accent1Color};
 `;

export const TitleEdit = styled(Text)`
  color: ${palette.primary1Color};
 `;

export const TriggerIcon = styled(Entypo)`
  color: ${palette.primary1Color};
  font-size: 21;
`;

export const EditIcon = styled(FontelloIcon)`
  color: ${palette.primary1Color};
  font-size: 26;
  margin: 10px;
 `;

export const TrashIcon = styled(Icon)`
  color: ${palette.accent2Color};
  font-size: 26;
  margin: 10px;
 `;