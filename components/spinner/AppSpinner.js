import React from 'react';
import palette from 'app/constants/Colors';

import {Content, Spinner} from 'native-base';
import {wrap} from './style'

const AppSpinner = () =>
    <Content contentContainerStyle={wrap}>
      <Spinner color={palette.primary1Color}/>
    </Content>;

export default AppSpinner;