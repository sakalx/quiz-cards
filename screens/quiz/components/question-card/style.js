import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {Card, Text, View} from 'native-base';

export const CardWrap = styled(Card)`
  background-color: ${palette.alternateBackground};
  flex: 1;
  margin: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Counter = styled(Text)`
  align-self: flex-end;
  color: ${palette.primary3Color};
  font-size: 16;
`;

export const QuestionWrap = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  text-align: center;
  color: ${palette.accent1Color};
  font-size: 28;
`;

export const Question = styled(Text)`
  text-align: center;
  color: ${palette.primary2Color};
  font-size: 18;
`;