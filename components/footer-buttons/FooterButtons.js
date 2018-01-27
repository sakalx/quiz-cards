import React from 'react';

import {Footer, FooterTab} from 'native-base';

import {RippleButton} from './style';

const FooterButtons = props => {
  const {leftBtnContent, rightBtnContent, leftBtnCB, rightBtnCB} = props;

  return (
      <Footer>
        <FooterTab>
          <RippleButton onPress={() => leftBtnCB()} full>
            {leftBtnContent}
          </RippleButton>
          <RippleButton onPress={() => rightBtnCB()} full>
            {rightBtnContent}
          </RippleButton>
        </FooterTab>
      </Footer>
  );
};

export default FooterButtons;