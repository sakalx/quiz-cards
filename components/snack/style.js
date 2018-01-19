import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {View} from 'native-base';
import Modal from 'react-native-modal';

export const Snack = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

export const Content = styled(View)`
  background-color: ${palette.defaultColor};
  align-items: center;
  justify-content: center;
  height: 67;
  width: 100%;
`;