import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {Constants} from 'expo';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {TouchableOpacity} from 'react-native';
import {
  Button,
  Container,
  Icon,
  Item,
  List,
  ListItem,
  Tab,
  Tabs,
  Text,
  View,
} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export const tab = {
  text: {
    color: palette.primary3Color,
    fontSize: 12,
  },
  textError: {
    color: palette.warningColor,
    fontSize: 12,
  },
  activeText: {
    color: palette.primary1Color,
    fontSize: 14,
  },
  tab: {
    backgroundColor: palette.alternateBackground,
  },
  activeTab: {
    backgroundColor: palette.alternateBackground,
  },
  underline: {
    backgroundColor: palette.accent1Color,
  },
};

export const Wrap = styled(Container)`
	background-color: ${palette.bodyBackground};
	justify-content: flex-end;
`;
export const SelectColoRTitle = styled(Text)`
	color: ${palette.primary2Color};
  margin: 15px;
`;
export const TabsView = styled(Tabs)`
	padding-top: ${Constants.statusBarHeight};
`;
export const TabView = styled(Tab)`
	background-color: ${palette.bodyBackground};
`;
export const InputWrap = styled(Item)`
  padding-left: 10px;
  padding-right: 70px;
`;
export const ListView = styled(List)`
  margin-bottom: 67;
`;
export const ListItemView = styled(ListItem)`
background-color: ${palette.bodyBackground};
`;
export const QuestionView = styled(View)`
  width: 90%;
`;
export const Question = styled(Text)`
  color: ${palette.primary2Color};
`;
export const Answer = styled(Text)`
  color: ${palette.primary3Color};
`;
export const AddButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40;
  right: 10;
  width: 50;
  height: 30;
  background-color:  ${palette.primary1Color};
`;
export const AddButtonTitle = styled(Text)`
  font-size: 12;
  padding: 0;
`;
export const SelectAnswerView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const SelectAnswerText = styled(Text)`
  color: ${palette.accent3Color};
  text-align: center;
`;
export const SelectAnswerSubText = styled(Text)`
  color: ${palette.defaultColor};
`;
export const AnswerButtons = styled(View)`
  width: 100%;
  margin: 25px;
  flex-direction: row;
  justify-content: space-around;
`;
export const FooterButton = styled(Button)`
 flex-direction: row;
 background-color: ${palette.alternateBackground};
 `;
export const ButtonTitle = styled(Text)`
 color: ${palette.primary1Color};
 font-size: 16;
 `;
export const HomeIcon = styled(Icon)`
 color: ${palette.primary1Color};
 font-size: 28;
 `;
export const TrashIcon = styled(Icon)`
 color: ${palette.accent2Color};
 font-size: 26;
 margin: 10px;
 `;
export const EditIcon = styled(FontelloIcon)`
 color: ${palette.primary1Color};
 font-size: 26;
 margin: 10px;
 `;
export const LogoIcon = styled(FontelloIcon)`
  color: ${palette.primary3Color};
  fontSize: 112;
  position: absolute;
  bottom: 0;
  left: 0;
 `;
 export const DeckTabView = styled(View)`
  margin-bottom: 132;
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
export const SnackContent = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
 `;
 export const TittleCancel = styled(Text)`
  color: ${palette.primary3Color};
 `
export const TittleDelete = styled(Text)`
  color: ${palette.accent2Color};
 `;
