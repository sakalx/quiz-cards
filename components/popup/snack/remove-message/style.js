import styled from 'styled-components/native';
import palette from 'app/constants/Colors';
import {Text, View} from 'native-base';

export const Wrap = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

export const TittleCancel = styled(Text)`
  color: ${palette.primary3Color};
`;

export const TittleDelete = styled(Text)`
  color: ${palette.accent2Color};
`;
