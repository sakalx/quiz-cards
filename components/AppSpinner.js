import React from 'react';
import palette from 'constants/Colors';

import {Content, Spinner} from 'native-base';

style = {
  flex: 1,
  justifyContent: 'center',
};

const AppSpinner = () =>
    <Content contentContainerStyle={style}>
      <Spinner color={palette.primary1Color}/>
    </Content>;

export default AppSpinner;