import React from 'react';
import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {TouchableOpacity} from 'react-native';

import {Icon} from 'native-base';

const Button = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20;
  right: 20;
  width: 52;
  height: 52;
  background-color:  ${palette.primary1Color};
  border-radius: 100;
`;

const ButtonIcon = styled(Icon)`
  fontSize: 48;
  color: ${palette.defaultColor};
`;

class ButtonAdd extends React.Component {
  render() {
    const {navigate} = this.props;

    return (
        <Button onPress={() => navigate('UpdateDeck')}>
          <ButtonIcon name='add'/>
        </Button>
    );
  }
}

export default ButtonAdd;