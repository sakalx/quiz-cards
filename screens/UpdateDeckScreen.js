import React from 'react';
import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {Constants} from 'expo';

import {
  Button,
  Container,
  Footer,
  FooterTab,
  Form,
  Icon,
  Input,
  Item,
  Label,
  List,
  ListItem,
  Tab,
  Tabs,
  Text
} from 'native-base';

const tabStyle = {
  text: {
    color: palette.primary3Color,
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
const Wrap = styled(Container)`
	background-color: ${palette.bodyBackground};
	justify-content: flex-end;
`;
const WrapTab = styled(Tabs)`
	padding-top: ${Constants.statusBarHeight};
`;
const ScreenTab = styled(Tab)`
	background-color: ${palette.bodyBackground};
`;
const ButtonLayout = styled(Button)`
 flex-direction: row;
 background-color: ${palette.alternateBackground};
 `;
const ButtonTitle = styled(Text)`
 color: ${palette.primary1Color};
 font-size: 16;
 `;
const HomeIcon = styled(Icon)`
 color: ${palette.primary1Color};
 font-size: 28;
 `;

class UpdateDeckScreen extends React.Component {

  static navigationOptions = {header: null};

  render() {
    const items = [4, 5, 6, 7, 8, 2, 3];
    return (
				<Wrap>
					<WrapTab initialPage={0}
									 tabBarUnderlineStyle={tabStyle.underline}
					>
						<ScreenTab heading='DECK'
											 textStyle={tabStyle.text}
											 activeTextStyle={tabStyle.activeText}
											 tabStyle={tabStyle.tab}
											 activeTabStyle={tabStyle.activeTab}
						>

							<Form >
								<Item floatingLabel last>
									<Label>Name of new Category</Label>
									<Input style={{color: palette.primary1Color}}/>
								</Item>
							</Form>

						</ScreenTab>
						<ScreenTab heading='QUESTIONS'
											 textStyle={tabStyle.text}
											 activeTextStyle={tabStyle.activeText}
											 tabStyle={tabStyle.tab}
											 activeTabStyle={tabStyle.activeTab}
						>
							<List dataArray={items}
										renderRow={(item) =>
												<ListItem>
													<Text>{item}</Text>
												</ListItem>
                    }>
							</List>
						</ScreenTab>
					</WrapTab>
					<Footer>
						<FooterTab>
							<ButtonLayout full>
								<HomeIcon name='home'/>
							</ButtonLayout>
							<ButtonLayout full>
								<ButtonTitle>SAVE</ButtonTitle>
							</ButtonLayout>
						</FooterTab>
					</Footer>
				</Wrap>
    );
  }
}

export default UpdateDeckScreen;