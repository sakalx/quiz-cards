import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

export const Button = styled(TouchableOpacity)`
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

export const ButtonIcon = styled(Icon)`
  fontSize: 48;
  color: ${palette.defaultColor};
`;