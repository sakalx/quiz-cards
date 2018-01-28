import styled from 'styled-components/native';
import palette from 'app/constants/Colors';
import {Constants} from 'expo';

import {Container, Icon, Tab, Tabs, Text, View} from 'native-base';

export const Spinner = styled(View)`
  backgroundColor: ${palette.bodyBackground};
  flex: 1 
 `;

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

export const TabsView = styled(Tabs)`
	padding-top: ${Constants.statusBarHeight};
`;

export const TabView = styled(Tab)`
	background-color: ${palette.bodyBackground};
`;

export const FooterBtnTitle = styled(Text)`
  color: ${palette.primary1Color};
  font-size: 16;
`;

export const HomeIcon = styled(Icon)`
  color: ${palette.primary1Color};
  font-size: 28;
`;

export const DeckTabView = styled(View)`
  margin-bottom: 132;
`;