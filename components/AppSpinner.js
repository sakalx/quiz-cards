import React from 'react';
import palette from 'constants/Colors';

import {Container, Content, Spinner} from 'native-base';

style = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: palette.bodyBackground,
};

const AppSpinner = () =>
    <Container>
      <Content contentContainerStyle={style}>
        <Spinner color={palette.primary1Color}/>
      </Content>
    </Container>;

export default AppSpinner;