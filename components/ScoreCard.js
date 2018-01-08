import React from 'react';
import styled, {css} from 'styled-components/native';
import palette from 'constants/Colors';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {Button, Container, Footer, FooterTab, Icon, Text, View} from 'native-base';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

const Wrap = styled(Container)`
  background-color: ${palette.bodyBackground};
 `;
const Body = styled(View)`
 background-color: ${palette.bodyBackground};
 flex: 1;
 justify-content: center;
 align-items: center;
 `;
const Title = styled(Text)`
 color: ${palette.defaultColor};
 font-size: 34;
 `;
const Subtitle = styled(Text)`
   ${props => props.color && css`
    color: ${props.color};
  `}
   font-size: 21;
 `;
const ButtonLayout = styled(Button)`
 flex-direction: row;
 background-color: ${palette.alternateBackground};
 `;
const ButtonTitle = styled(Text)`
 color: ${palette.primary1Color};
 `;
const LogoIcon = styled(FontelloIcon)`
  ${props => props.color && css`
    color: ${props.color};
  `}
 font-size: 128;
 `;
const HomeIcon = styled(Icon)`
 color: ${palette.primary1Color};
 font-size: 28;
 `;
const ResetIcon = styled(FontelloIcon)`
 color: ${palette.primary1Color};
 font-size: 28;
 `;

class ScoreCard extends React.Component {

  selectColor = score => {
    switch (true) {
      case score > 80:
        return palette.primary1Color;
      case score > 60:
        return palette.accent1Color;
      case score > 40:
        return palette.warningColor;
      default:
        return palette.errorColor;
    }
  };

  render() {
    const {score, navigation: {navigate, state: {params: {deck}}}} = this.props;

    return (
        <Wrap>
          <Body>
            <Title>Correct Answers</Title>
            <Subtitle color={this.selectColor(score)}> {score}% </Subtitle>
            <LogoIcon name='logo' color={this.selectColor(score)}/>
          </Body>
          <Footer>
            <FooterTab>
              <ButtonLayout onPress={() => navigate('Home')} full>
                <HomeIcon name='home'/>
              </ButtonLayout>
              <ButtonLayout onPress={ () => navigate('Quiz', {deck}) } full>
                <ButtonTitle>Try Again</ButtonTitle>
                <ResetIcon name='reload'/>
              </ButtonLayout>
            </FooterTab>
          </Footer>
        </Wrap>
    );
  }
}

export default ScoreCard; 