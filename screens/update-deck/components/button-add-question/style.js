import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

export const AddButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40;
  right: 10;
  width: 50;
  height: 30;
  background-color:  ${palette.primary1Color};
`;

export const Title = styled(Text)`
  font-size: 12;
  padding: 0;
`;