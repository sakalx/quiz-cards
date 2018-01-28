import React from 'react';
import palette from 'app/constants/Colors';

import FooterButtons from 'app/components/footer-buttons/FooterButtons';
import {
  Body,
  FooterBtnTitle,
  HomeIcon,
  LogoIcon,
  ResetIcon,
  RightFooterBtnView,
  Subtitle,
  Title,
  Wrap
} from './style';

const ScoreCard = props => {
  const {score, reset, navigation: {navigate}} = props;

  const selectColor = score => {
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

  return (
      <Wrap>
        <Body>
        <Title>SCORE</Title>
        <Subtitle color={selectColor(score)}>
          {score}%
        </Subtitle>
        <LogoIcon color={selectColor(score)}
                  name='logo'
        />
        </Body>
        <FooterButtons leftBtnContent={<HomeIcon name='home'/>}
                       rightBtnContent={
                         <RightFooterBtnView>
                           <FooterBtnTitle>TRY AGAIN</FooterBtnTitle>
                           <ResetIcon name='reload'/>
                         </RightFooterBtnView>
                       }
                       leftBtnCB={() => navigate('Home')}
                       rightBtnCB={reset}
        />
      </Wrap>
  );
};

export default ScoreCard;